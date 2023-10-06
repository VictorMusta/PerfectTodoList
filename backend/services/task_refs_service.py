# ruff: noqa: N802, PLR6301
from TaskRefs_pb2 import GetAllTaskRefsResponse, GetTaskRefResponse

from functions.task_ref_functions import TaskRefFunctions
import TaskRefs_pb2_grpc as TaskRef_stub_grpc

import google.protobuf.empty_pb2
empty = google.protobuf.empty_pb2.Empty()


class TaskRefService(TaskRef_stub_grpc.TaskRefsServiceServicer):
    def __init__(self, *args, **kwargs):
        pass

    def create_task_ref(self, request, context) -> None:
        TaskRefFunctions.new_task_ref(request.idTask)
        return empty

    def get_task_ref(self, request, context) -> GetTaskRefResponse:
        return GetTaskRefResponse(**result)

    def get_all_task_refs(self, request, context) -> GetAllTaskRefsResponse:
        return GetAllTaskRefsResponse(**result)

    def update_task_ref(self, request, context) -> None:
        pass
