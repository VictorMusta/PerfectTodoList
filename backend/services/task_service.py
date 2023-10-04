# ruff: noqa: N802, PLR6301
from Task_pb2 import (
    GetAllTasksResponse,
    GetTaskResponse,
    CreateTaskRequest,
    GetTaskRequest,
    DeleteTaskRequest,
)
from functions.task_functions import TaskFunctions
import Task_pb2_grpc as task_stub_grpc


class TaskService(task_stub_grpc.TaskServiceServicer):
    def __init__(self, *args, **kwargs) -> None:
        pass

    def create_task(self, request: CreateTaskRequest, _context) -> None:
        TaskFunctions.new_task(request.title)

    def get_task(self, request: GetTaskRequest, _context) -> GetAllTasksResponse:
        task = TaskFunctions.get_task(request.idTask)
        result = {"task": task}
        return GetTaskResponse(**result)

    def delete_task(self, request: DeleteTaskRequest, _context) -> None:
        TaskFunctions.delete_task(request.idTask)

    def get_tasks(self, request, _context) -> GetAllTasksResponse:
        tasks = TaskFunctions.get_all_task()
        result = {"tasks": tasks}
        return GetAllTasksResponse(**result)

    def update_task(self, request, _context) -> None:
        TaskFunctions.update_task(
            request.idTask,
            title=request.title,
            color=request.color,
            resolved=request.resolved,
        )
