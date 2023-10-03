import grpc
from concurrent import futures
from Task_pb2 import (
    TaskResponse,
    CreateTaskResponse,
    TaskListResponse,
)
from functions import task_functions

# import Task_pb2 as task_stub
import Task_pb2_grpc as task_stub_grpc


class TaskService(task_stub_grpc.TaskServiceServicer):
    def __init__(self, *args, **kwargs):
        pass

    def createTask(self, request, context):
        task_functions.TaskFunctions.new_task(request.title)

        return CreateTaskResponse()

    def getTask(self, request, context):
        task = task_functions.TaskFunctions.get_task(request.idTask)
        result = {"Task": task}
        return TaskResponse(**result)

    def getTasks(self, request, context):
        print(request)
        task = task_functions.TaskFunctions.get_all_task()
        print(task)
        result = {"Task": task}
        return TaskListResponse(**result)

    # def getTasks(self, request, context):
    #     idTask = request.idTask
    #     title = request.title

    #     result = {"idTask": idTask, "title": title}
    #     return TaskResponse(**result)
    #     # return super().getTasks(request, context)


def serve():
    server = grpc.server(futures.ThreadPoolExecutor(max_workers=10))
    task_stub_grpc.add_TaskServiceServicer_to_server(TaskService(), server)
    server.add_insecure_port("[::]:50051")
    server.start()
    print("started!")
    server.wait_for_termination()


if __name__ == "__main__":
    serve()
