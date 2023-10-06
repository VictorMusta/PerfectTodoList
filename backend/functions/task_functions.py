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
                task_object = Task(
                    title=title,
                    color="Yellow",
                )
                session.add(task_object)
                session.commit()
                return
            except Exception:
                abort(400)

    @staticmethod
    def get_task(idTask: int):
        with Session(engine) as session:
            
            task = session.scalar(session.query(Task).where(Task.idTask == idTask))
            if(task):
                return task.as_dict()
            else:
                abort(404)
       


    @staticmethod
    def update_task(idTask, **kwargs):
        with Session(engine) as session:
            task_to_update = session.scalar(
                session.query(Task).where(Task.idTask == idTask)
            )
            if task_to_update:
                for key, value in kwargs.items():
                    if value:
                        setattr(task_to_update, key, value)
                    session.commit()
                return
            else:
                abort(404)

    @staticmethod
    def get_all_task():
        with Session(engine) as session:
            taskList = [
                taskObject.as_dict() for taskObject in session.query(Task).all()
            ]
            return taskList

    @staticmethod
    def delete_task(idTask:int):
        with Session(engine) as session:
            deletedTasks = (
                session.query(Task)
                .where(Task.idTask == idTask)
                .delete()
            )
            if deletedTasks > 0:
                session.commit()
            return deletedTasks

    @staticmethod
    def delete_all_tasks():
        with Session(engine) as session:
            number_of_tasks_found = session.query(Task).delete()
            if number_of_tasks_found > 0:
                session.commit()
            return number_of_tasks_found
