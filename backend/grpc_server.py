import grpc
from concurrent import futures
from Task_pb2_grpc import add_TaskServiceServicer_to_server
from TaskRef_pb2_grpc import add_TaskRefServiceServicer_to_server
from services.task_service import TaskService
from services.task_refs_service import TaskRefService


def serve() -> None:
    server = grpc.server(futures.ThreadPoolExecutor(max_workers=10))
    add_TaskServiceServicer_to_server(TaskService(), server)
    add_TaskRefServiceServicer_to_server(TaskRefService(), server)
    server.add_insecure_port("[::]:50051")
    server.start()
    # TODO: Use a logger
    print("started!")
    server.wait_for_termination()


if __name__ == "__main__":
    serve()
