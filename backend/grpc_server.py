import grpc
import logging
from concurrent import futures
from Task_pb2_grpc import add_TaskServiceServicer_to_server
from TaskRef_pb2_grpc import add_TaskRefServiceServicer_to_server
from services.task_service import TaskService
from services.task_refs_service import TaskRefService


def serve() -> None:
    logger = logging.getLogger(__name__)
    logger.setLevel(logging.DEBUG)
    handler = logging.FileHandler("./log/")
    formatter = logging.Formatter(
        "%(levelname)s - %(name)s - %(message)s - %(asctime)s"
    )
    handler.setFormatter(formatter)
    logger.addHandler(handler)

    logger.debug("debug message")
    logger.info("info message")
    logger.warning("warn message")
    logger.error("error message")
    logger.critical("critical message")

    server = grpc.server(futures.ThreadPoolExecutor(max_workers=10))
    add_TaskServiceServicer_to_server(TaskService(), server)
    add_TaskRefServiceServicer_to_server(TaskRefService(), server)
    server.add_insecure_port("[::]:50051")
    server.start()
    logger.info("started!")
    server.wait_for_termination()


if __name__ == "__main__":
    serve()
