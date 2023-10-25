from flask import abort
from models.Task import Task
from sqlalchemy import create_engine
from sqlalchemy.orm import Session

# TODO: Le nom des fichiers / modules / classes est trop générique
# Function est trop générique, d'ailleurs les fonctions ont l'air de gérer trop de choses
# (requêtes bdd + requetes http)


# TODO: create_engine est initialisé à la racine du script, c'est pas ouf Fais une fonction ou une classe qui l'initialise, et comme ça tu peux le factoriser avec l'autre fichier de ce module
# TODO: Utilise des variables d'environment pour toutes les parties "configurable" de cette connection string
engine = create_engine("postgresql+psycopg2://taskAdmin:mdppostgres@postgres/postgres")


class TaskFunctions:
    # TODO: Comme dit plus haut, sépare le http (abort(400)) de ton interaction avec la bdd
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

    # TODO: Par exemple, cette fonction est bien, elle ne gère que la bdd
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
