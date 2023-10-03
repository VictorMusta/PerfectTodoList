from flask import abort, request
from models.Task import Task
from sqlalchemy import create_engine
from sqlalchemy.orm import Session


engine = create_engine(
    "postgresql+psycopg2://taskAdmin:mdppostgres@localhost/postgres", echo=True
)


class TaskFunctions:
    @staticmethod
    def new_task(title: str):
        with Session(engine) as session:
            try:
                taskObject = Task(
                    title=title,
                    color="Yellow",
                )
                session.add(taskObject)
                session.commit()
                return
            except Exception:
                abort(400)

    @staticmethod
    def get_task(idTask=int):
        try:
            with Session(engine) as session:
                taskList = session.scalar(
                    session.query(Task).where(Task.idTask == idTask)
                )
                return taskList.as_dict() or abort(404)
        except Exception:
            abort(400)

    @staticmethod
    def update_task(idTask, **kwargs):
        try:
            with Session(engine) as session:
                task_to_update = session.scalar(
                    session.query(Task).where(Task.idTask == idTask)
                )
                for key, value in kwargs.items():
                    if value:
                        setattr(task_to_update, key, value)
                    session.commit()
                return {"id": id}
        except Exception:
            abort(404)

    @staticmethod
    def get_all_task():
        with Session(engine) as session:
            taskList = [
                taskObject.as_dict() for taskObject in session.query(Task).all()
            ]
            print(taskList)
            return taskList or "no Task found"

    @staticmethod
    def delete_task(requestBody):
        try:
            with Session(engine) as session:
                requestBody = request.get_json()
                deletedTasks = (
                    session.query(Task)
                    .where(Task.idTask == requestBody["idTask"])
                    .delete()
                )
                if deletedTasks > 0:
                    session.commit()
                    return f"task n° {requestBody.get('idTask')} successfully deleted"
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
