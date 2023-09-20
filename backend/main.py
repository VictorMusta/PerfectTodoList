from flask import Flask, request
from sqlalchemy import create_engine
from functions.task_functions import TaskFunctions

engine = create_engine(
    "postgresql+psycopg2://taskAdmin:mdppostgres@localhost/postgres", echo=True
)

app = Flask(__name__)


@app.route("/")
def hello_world():
    return "<p>This is my pure Javascript's Flask's api! I Hope you enjoy it.</p>"


@app.errorhandler(400)
def bad_request(e):
    # defining function
    return "<p>BAD REQUEST customized error</p>"


@app.errorhandler(404)
def not_found(e):
    # defining function
    return "<p>NOT FOUND customized error</p>"


@app.post("/task")
def new_task():
    return TaskFunctions.new_task(request.get_json())


@app.get("/task")
def get_task():
    return TaskFunctions.get_task(request.get_json()["id"])


@app.patch("/task")
def update_task():
    return TaskFunctions.update_task(request.get_json())


@app.delete("/task")
def delete_task():
    return TaskFunctions.delete_task(request.get_json())


@app.get("/tasks")
def get_all_task():
    return TaskFunctions.get_all_task()


@app.delete("/tasks")
def delete_all_tasks():
    return TaskFunctions.delete_all_tasks()
