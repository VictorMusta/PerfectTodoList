from flask import abort, request
from models.Task import Task
from sqlalchemy import create_engine
from sqlalchemy.orm import Session

engine = create_engine(
    "postgresql+psycopg2://taskAdmin:mdppostgres@localhost/postgres", echo=True
)


class TaskFunctions:
    @staticmethod
    def new_task(requestBody: dict):
        with Session(engine) as session:
            try:
                if requestBody.get("title", ""):
                    taskObject = Task(
                        title=requestBody["title"],
                        color="Yellow",
                    )
                    session.add(taskObject)
                    session.commit()
                    return taskObject.as_dict()
                else:
                    abort(400)
            except Exception:
                abort(400)

    @staticmethod
    def get_task(id=int):
        try:
            with Session(engine) as session:
                taskList = session.scalar(session.query(Task).where(Task.id == id))
                return taskList.as_dict() or abort(404)
        except Exception:
            abort(400)

    @staticmethod
    def update_task(id, **kwargs):
        try:
            with Session(engine) as session:
                task_to_update = session.scalar(
                    session.query(Task).where(Task.id == id)
                )
                for key, value in kwargs.items():
                    setattr(task_to_update, key, value)
                    session.commit()
                return {"id": 3}
        except Exception as err:
            print(err)
            abort(404)

    @staticmethod
    def get_all_task():
        with Session(engine) as session:
            taskList = [
                taskObject.as_dict() for taskObject in session.query(Task).all()
            ]
            return taskList or "no Task found"

    @staticmethod
    def delete_task(requestBody):
        try:
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
        except Exception:
            abort(400)

    @staticmethod
    def delete_all_tasks():
        with Session(engine) as session:
            number_of_tasks_found = session.query(Task).delete()
            if number_of_tasks_found > 0:
                session.commit()
                return f"{number_of_tasks_found} Task(s) cleared"
            return "No task to delete."
