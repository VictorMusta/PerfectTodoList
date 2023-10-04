# ruff: noqa: N802, PLR6301
from TaskRefs_pb2 import GetAllTaskRefsResponse, GetTaskRefResponse

from functions import task_functions
import TaskRefs_pb2_grpc as TaskRef_stub_grpc


class TaskRefService(TaskRef_stub_grpc.TaskRefsServiceServicer):
    def __init__(self, *args, **kwargs):
        pass

    def create_task_ref(self, request, context) -> None:
        pass

    def get_task_ref(self, request, context) -> GetTaskRefResponse:
        return GetTaskRefResponse(**result)

    def get_all_task_refs(self, request, context) -> GetAllTaskRefsResponse:
        return GetAllTaskRefsResponse(**result)

    def update_task_ref(self, request, context) -> None:
        pass
