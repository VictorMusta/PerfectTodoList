import grpc
import logging
from concurrent import futures
from Task_pb2_grpc import add_TaskServiceServicer_to_server
from TaskRef_pb2_grpc import add_TaskRefServiceServicer_to_server
from services.task_service import TaskService
from services.task_refs_service import TaskRefService


def serve() -> None:
    logger = logging.getLogger("backend")
    logger.setLevel(logging.DEBUG)
    handler = logging.FileHandler("./backend-logs.log")
    formatter = logging.Formatter(
        "%(levelname)s - %(name)s - %(message)s - %(asctime)s"
    )
    handler.setFormatter(formatter)
    logger.addHandler(handler)

    server = grpc.server(futures.ThreadPoolExecutor(max_workers=10))
    add_TaskServiceServicer_to_server(TaskService(), server)
    add_TaskRefServiceServicer_to_server(TaskRefService(), server)
    server.add_insecure_port("[::]:50051")
    logger.info("starting backend....")
    server.start()
    logger.info("backend started!")
    server.wait_for_termination()


if __name__ == "__main__":
    serve()
