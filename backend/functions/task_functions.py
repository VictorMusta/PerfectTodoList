from typing import Any
from flask import request, abort
from models.Task import Task
from sqlalchemy import create_engine, update
from sqlalchemy.orm import Session
from datetime import datetime
from urllib.error import HTTPError

engine = create_engine(
    "postgresql+psycopg2://taskAdmin:mdppostgres@localhost/postgres", echo=True
)


class TaskFunctions:
    @staticmethod
    def new_task(requestBody: dict):
        with Session(engine) as session:
            try:
                if (
                    requestBody.get("Task")
                    and requestBody.get("Task").get("title")
                    and requestBody.get("Task").get("title") != ""
                ):
                    taskObject = Task(
                        title=requestBody["Task"]["title"],
                        date=datetime.now(),
                        color="Yellow",
                    )
                    session.add(taskObject)
                    session.commit()
                    return taskObject.as_dict()
                else:
                    abort(400)
            except:
                abort(400)

    @staticmethod
    def get_task(id=int) -> dict[str, Any]:
        with Session(engine) as session:
            try:
                taskList = session.scalar(session.query(Task).where(Task.id == id))
                return taskList.as_dict()
            except Exception as err:
                print(f"Unexpected {err=}, {type(err)=}")
                raise

    @staticmethod
    def update_task(requestBody: dict[str, Any]):
        task_to_update = TaskFunctions.get_task(requestBody["Task"]["id"])
        with Session(engine) as session:
            update(Task).where(Task.id == task_to_update.get("id")).values(
                title=requestBody["Task"]["title"] or task_to_update.get("title"),
                date=task_to_update.get("date"),
                color=task_to_update.get("color"),
                resolved=task_to_update.get("resolved"),
            )
            session.commit()
            return task_to_update

    @staticmethod
    def get_all_task():
        with Session(engine) as session:
            taskList = [
                taskObject.as_dict() for taskObject in session.query(Task).all()
            ]
            if taskList == []:
                return "No Task Found"
            return taskList

    @staticmethod
    def delete_task(requestBody):
        with Session(engine) as session:
            requestBody = request.get_json()
            deletedTasks = (
                session.query(Task).where(Task.id == requestBody["id"]).delete()
            )
            if deletedTasks > 0:
                session.commit()
                return "task n°" + str(requestBody["id"]) + " successfully deleted"
            else:
                return "No Task found."

    @staticmethod
    def delete_all_tasks():
        with Session(engine) as session:
            number_of_tasks_found = session.query(Task).delete()
            if number_of_tasks_found > 0:
                session.commit()
                return str(number_of_tasks_found) + " Task(s) cleared"
            return "No tasks found"
