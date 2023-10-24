from flask import abort
from models.Task import Task
from sqlalchemy import create_engine
from sqlalchemy.orm import Session


engine = create_engine("postgresql+psycopg2://taskAdmin:mdppostgres@postgres/postgres")


class TaskFunctions:
    @staticmethod
    def new_task(title: str, color: str) -> str:
        with Session(engine) as session:
            try:
                task_object = Task(title=title, color=color)
                session.add(task_object)
                session.commit()
                return str(task_object.id_task)
            except ValueError as e:
                abort(400, e)

    @staticmethod
    def get_task(id_task: str) -> Task:
        with Session(engine) as session:
            task = session.scalar(session.query(Task).where(Task.id_task == id_task))
            if task:
                return task.as_dict()
            return abort(404)

    @staticmethod
    def update_task(id_task: int, **kwargs) -> None:
        with Session(engine) as session:
            task_to_update = session.scalar(
                session.query(Task).where(Task.id_task == id_task)
            )
            if task_to_update:
                for key, value in kwargs.items():
                    if value:
                        setattr(task_to_update, key, value)
                    session.commit()
                return None
            return abort(404)

    @staticmethod
    def get_all_task() -> list:
        with Session(engine) as session:
            return [taskObject.as_dict() for taskObject in session.query(Task).all()]

    @staticmethod
    def delete_task(id_task: int) -> None:
        with Session(engine) as session:
            deleted_tasks = session.query(Task).where(Task.id_task == id_task).delete()
            session.commit()
            if deleted_tasks == 0:
                return abort(404)
            return None

    @staticmethod
    def delete_all_tasks() -> int:
        with Session(engine) as session:
            number_of_tasks_found = session.query(Task).delete()
            session.commit()
            return number_of_tasks_found
