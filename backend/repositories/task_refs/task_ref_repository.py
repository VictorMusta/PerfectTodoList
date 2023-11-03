from xml.dom import NotFoundErr
from flask import abort
from repositories.tasks.task_repository import TaskRepository
from models.TaskRef import TaskRef
from sqlalchemy import create_engine, true
from sqlalchemy.orm import Session


engine = create_engine("postgresql+psycopg2://taskAdmin:mdppostgres@postgres/postgres")


class TaskRefRepository:
    @staticmethod
    def new_task_ref(id_task: str, id_list: int) -> None:
        with Session(engine) as session:
            try:
                task_ref_object = TaskRef(id_task=id_task, id_list=id_list)
                session.add(task_ref_object)
                session.commit()
            except NotFoundErr as e:
                abort(400, e)

    @staticmethod
    def get_task_ref(id_task_ref: str) -> dict:
        with Session(engine) as session:
            task_ref = session.scalar(
                session.query(TaskRef).where(TaskRef.id_task_ref == id_task_ref)
            )
            if task_ref:
                return task_ref.as_dict()
            return abort(404)

    @staticmethod
    def update_task_ref(id_task_ref: str, **kwargs) -> None:
        with Session(engine) as session:
            task_ref_to_update = session.scalar(
                session.query(TaskRef).where(TaskRef.id_task_ref == id_task_ref)
            )
            if task_ref_to_update:
                for key, value in kwargs.items():
                    if value:
                        setattr(task_ref_to_update, key, value)
                    session.commit()
                return None
        return abort(404)

    @staticmethod
    def get_all_task_refs() -> list:
        with Session(engine) as session:
            return [
                task_ref_object.as_dict()
                for task_ref_object in session.query(TaskRef).all()
            ]

    @staticmethod
    def delete_task_ref(id_task_ref: str) -> int:
        with Session(engine) as session:
            amount_of_deleted_task_refs = (
                session.query(TaskRef)
                .where(TaskRef.id_task_ref == id_task_ref)
                .delete()
            )
            if amount_of_deleted_task_refs == 0:
                return abort(404)
            session.commit()
        TaskRefRepository.delete_all_tasks_without_task_ref()
        return amount_of_deleted_task_refs

    @staticmethod
    def delete_all_tasks_without_task_ref() -> None:
        tasks = TaskRepository.get_all_task()
        task_refs = TaskRefRepository.get_all_task_refs()

        for task in tasks:
            found = False
            for task_ref in task_refs:
                if task.get("id_task") == task_ref.get("id_task"):
                    found = True
            if found is False:
                TaskRepository.delete_task(task.get("id_task"))
            found = False

    @staticmethod
    def delete_all_task_refs() -> int:
        with Session(engine) as session:
            amount_of_deleted_task_refs = session.query(TaskRef).delete()
            if amount_of_deleted_task_refs > 0:
                session.commit()
            return amount_of_deleted_task_refs
