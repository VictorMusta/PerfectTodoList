# ruff: noqa: N802, PLR6301
from TaskRef_pb2 import (
    GetAllTaskRefResponse,
    GetTaskRefRequest,
    GetTaskRefResponse,
    DeleteTaskRefRequest,
    DeleteAllTaskRefResponse,
)

from functions.task_ref_functions import TaskRefFunctions
import TaskRef_pb2_grpc as TaskRef_stub_grpc
import logging
import google.protobuf.empty_pb2

empty = google.protobuf.empty_pb2.Empty()
logger = logging.getLogger("backend")


class TaskRefService(TaskRef_stub_grpc.TaskRefServiceServicer):
    def __init__(self, *args, **kwargs) -> None:
        pass

    def create_task_ref(self, request, context):
        logger.info("create_task_ref called")
        TaskRefFunctions.new_task_ref(request.id_task, request.id_list)
        return empty

    def get_task_ref(self, request: GetTaskRefRequest, context) -> GetTaskRefResponse:
        logger.info("get_task_ref called")
        result = TaskRefFunctions.get_task_ref(request.id_task_ref)
        result = {"task_ref": result}
        return GetTaskRefResponse(**result)

    def get_all_task_refs(self, request, context) -> GetAllTaskRefResponse:
        logger.info("get_all_task_refs called")
        task_list = TaskRefFunctions.get_all_task_refs()
        result = {"task_refs": task_list}
        return GetAllTaskRefResponse(**result)

    def update_task_ref(self, request, context):
        logger.info("update_task_ref called")
        TaskRefFunctions.update_task_ref(
            request.id_task_ref,
            id_task=request.id_task,
            id_list=request.id_list,
        )
        return empty

    def delete_task_ref(self, request: DeleteTaskRefRequest, _context):
        logger.info("delete_task_ref called")
        TaskRefFunctions.delete_task_ref(request.id_task_ref)
        return empty

    def delete_all_task_refs(self, request, _context) -> None:
        logger.info("delete_all_task_refs called")
        amount_of_deleted_tasks = TaskRefFunctions.delete_all_task_refs()
        result = {"amount_of_deleted_task_refs": amount_of_deleted_tasks}
        return DeleteAllTaskRefResponse(**result)
