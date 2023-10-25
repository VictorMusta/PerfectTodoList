# ruff: noqa: N802, PLR6301
from Task_pb2 import (
    GetAllTasksResponse,
    GetTaskResponse,
    CreateTaskRequest,
    CreateTaskResponse,
    GetTaskRequest,
    DeleteTaskRequest,
    DeleteAllTasksResponse,
)

from functions.task_functions import TaskFunctions
import Task_pb2_grpc as task_stub_grpc
import logging
import google.protobuf.empty_pb2

empty = google.protobuf.empty_pb2.Empty()
logger = logging.getLogger("backend")


class TaskService(task_stub_grpc.TaskServiceServicer):
    def __init__(self, *args, **kwargs) -> None:
        pass

    def create_task(self, request: CreateTaskRequest, _context) -> CreateTaskResponse:
        logger.info("create_task called")
        id_task = TaskFunctions.new_task(request.title, request.color)
        result = {"id_task": id_task}
        return CreateTaskResponse(**result)

    def get_task(self, request: GetTaskRequest, _context) -> GetAllTasksResponse:
        logger.info("get_task called")
        task = TaskFunctions.get_task(request.id_task)
        result = {"task": task}
        return GetTaskResponse(**result)

    def delete_task(self, request: DeleteTaskRequest, _context):
        logger.info("delete_task called")
        TaskFunctions.delete_task(request.id_task)
        return empty

    def delete_all_tasks(
        self, request: DeleteTaskRequest, _context
    ) -> DeleteAllTasksResponse:
        logger.info("delete_all_tasks called")
        amount_of_deleted_tasks = TaskFunctions.delete_all_tasks()
        result = {"amount_of_deleted_tasks": amount_of_deleted_tasks}
        return DeleteAllTasksResponse(**result)

    def get_all_tasks(self, request, _context) -> GetAllTasksResponse:
        logger.info("get_all_tasks called")
        tasks = TaskFunctions.get_all_task()
        result = {"tasks": tasks}
        return GetAllTasksResponse(**result)

    def update_task(self, request, _context):
        logger.info("update_task called")
        TaskFunctions.update_task(
            request.id_task,
            title=request.title,
            color=request.color,
            resolved=request.resolved,
        )
        return empty
