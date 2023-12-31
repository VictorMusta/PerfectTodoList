# Generated by the gRPC Python protocol compiler plugin. DO NOT EDIT!
"""Client and server classes corresponding to protobuf-defined services."""
import grpc

import Task_pb2 as Task__pb2
from google.protobuf import empty_pb2 as google_dot_protobuf_dot_empty__pb2


class TaskServiceStub(object):
    """Missing associated documentation comment in .proto file."""

    def __init__(self, channel):
        """Constructor.

        Args:
            channel: A grpc.Channel.
        """
        self.create_task = channel.unary_unary(
                '/TaskService/create_task',
                request_serializer=Task__pb2.CreateTaskRequest.SerializeToString,
                response_deserializer=Task__pb2.CreateTaskResponse.FromString,
                )
        self.get_task = channel.unary_unary(
                '/TaskService/get_task',
                request_serializer=Task__pb2.GetTaskRequest.SerializeToString,
                response_deserializer=Task__pb2.GetTaskResponse.FromString,
                )
        self.get_all_tasks = channel.unary_unary(
                '/TaskService/get_all_tasks',
                request_serializer=google_dot_protobuf_dot_empty__pb2.Empty.SerializeToString,
                response_deserializer=Task__pb2.GetAllTasksResponse.FromString,
                )
        self.update_task = channel.unary_unary(
                '/TaskService/update_task',
                request_serializer=Task__pb2.UpdateTaskRequest.SerializeToString,
                response_deserializer=google_dot_protobuf_dot_empty__pb2.Empty.FromString,
                )
        self.delete_task = channel.unary_unary(
                '/TaskService/delete_task',
                request_serializer=Task__pb2.DeleteTaskRequest.SerializeToString,
                response_deserializer=google_dot_protobuf_dot_empty__pb2.Empty.FromString,
                )
        self.delete_all_tasks = channel.unary_unary(
                '/TaskService/delete_all_tasks',
                request_serializer=google_dot_protobuf_dot_empty__pb2.Empty.SerializeToString,
                response_deserializer=Task__pb2.DeleteAllTasksResponse.FromString,
                )


class TaskServiceServicer(object):
    """Missing associated documentation comment in .proto file."""

    def create_task(self, request, context):
        """Missing associated documentation comment in .proto file."""
        context.set_code(grpc.StatusCode.UNIMPLEMENTED)
        context.set_details('Method not implemented!')
        raise NotImplementedError('Method not implemented!')

    def get_task(self, request, context):
        """Missing associated documentation comment in .proto file."""
        context.set_code(grpc.StatusCode.UNIMPLEMENTED)
        context.set_details('Method not implemented!')
        raise NotImplementedError('Method not implemented!')

    def get_all_tasks(self, request, context):
        """Missing associated documentation comment in .proto file."""
        context.set_code(grpc.StatusCode.UNIMPLEMENTED)
        context.set_details('Method not implemented!')
        raise NotImplementedError('Method not implemented!')

    def update_task(self, request, context):
        """Missing associated documentation comment in .proto file."""
        context.set_code(grpc.StatusCode.UNIMPLEMENTED)
        context.set_details('Method not implemented!')
        raise NotImplementedError('Method not implemented!')

    def delete_task(self, request, context):
        """Missing associated documentation comment in .proto file."""
        context.set_code(grpc.StatusCode.UNIMPLEMENTED)
        context.set_details('Method not implemented!')
        raise NotImplementedError('Method not implemented!')

    def delete_all_tasks(self, request, context):
        """Missing associated documentation comment in .proto file."""
        context.set_code(grpc.StatusCode.UNIMPLEMENTED)
        context.set_details('Method not implemented!')
        raise NotImplementedError('Method not implemented!')


def add_TaskServiceServicer_to_server(servicer, server):
    rpc_method_handlers = {
            'create_task': grpc.unary_unary_rpc_method_handler(
                    servicer.create_task,
                    request_deserializer=Task__pb2.CreateTaskRequest.FromString,
                    response_serializer=Task__pb2.CreateTaskResponse.SerializeToString,
            ),
            'get_task': grpc.unary_unary_rpc_method_handler(
                    servicer.get_task,
                    request_deserializer=Task__pb2.GetTaskRequest.FromString,
                    response_serializer=Task__pb2.GetTaskResponse.SerializeToString,
            ),
            'get_all_tasks': grpc.unary_unary_rpc_method_handler(
                    servicer.get_all_tasks,
                    request_deserializer=google_dot_protobuf_dot_empty__pb2.Empty.FromString,
                    response_serializer=Task__pb2.GetAllTasksResponse.SerializeToString,
            ),
            'update_task': grpc.unary_unary_rpc_method_handler(
                    servicer.update_task,
                    request_deserializer=Task__pb2.UpdateTaskRequest.FromString,
                    response_serializer=google_dot_protobuf_dot_empty__pb2.Empty.SerializeToString,
            ),
            'delete_task': grpc.unary_unary_rpc_method_handler(
                    servicer.delete_task,
                    request_deserializer=Task__pb2.DeleteTaskRequest.FromString,
                    response_serializer=google_dot_protobuf_dot_empty__pb2.Empty.SerializeToString,
            ),
            'delete_all_tasks': grpc.unary_unary_rpc_method_handler(
                    servicer.delete_all_tasks,
                    request_deserializer=google_dot_protobuf_dot_empty__pb2.Empty.FromString,
                    response_serializer=Task__pb2.DeleteAllTasksResponse.SerializeToString,
            ),
    }
    generic_handler = grpc.method_handlers_generic_handler(
            'TaskService', rpc_method_handlers)
    server.add_generic_rpc_handlers((generic_handler,))


 # This class is part of an EXPERIMENTAL API.
class TaskService(object):
    """Missing associated documentation comment in .proto file."""

    @staticmethod
    def create_task(request,
            target,
            options=(),
            channel_credentials=None,
            call_credentials=None,
            insecure=False,
            compression=None,
            wait_for_ready=None,
            timeout=None,
            metadata=None):
        return grpc.experimental.unary_unary(request, target, '/TaskService/create_task',
            Task__pb2.CreateTaskRequest.SerializeToString,
            Task__pb2.CreateTaskResponse.FromString,
            options, channel_credentials,
            insecure, call_credentials, compression, wait_for_ready, timeout, metadata)

    @staticmethod
    def get_task(request,
            target,
            options=(),
            channel_credentials=None,
            call_credentials=None,
            insecure=False,
            compression=None,
            wait_for_ready=None,
            timeout=None,
            metadata=None):
        return grpc.experimental.unary_unary(request, target, '/TaskService/get_task',
            Task__pb2.GetTaskRequest.SerializeToString,
            Task__pb2.GetTaskResponse.FromString,
            options, channel_credentials,
            insecure, call_credentials, compression, wait_for_ready, timeout, metadata)

    @staticmethod
    def get_all_tasks(request,
            target,
            options=(),
            channel_credentials=None,
            call_credentials=None,
            insecure=False,
            compression=None,
            wait_for_ready=None,
            timeout=None,
            metadata=None):
        return grpc.experimental.unary_unary(request, target, '/TaskService/get_all_tasks',
            google_dot_protobuf_dot_empty__pb2.Empty.SerializeToString,
            Task__pb2.GetAllTasksResponse.FromString,
            options, channel_credentials,
            insecure, call_credentials, compression, wait_for_ready, timeout, metadata)

    @staticmethod
    def update_task(request,
            target,
            options=(),
            channel_credentials=None,
            call_credentials=None,
            insecure=False,
            compression=None,
            wait_for_ready=None,
            timeout=None,
            metadata=None):
        return grpc.experimental.unary_unary(request, target, '/TaskService/update_task',
            Task__pb2.UpdateTaskRequest.SerializeToString,
            google_dot_protobuf_dot_empty__pb2.Empty.FromString,
            options, channel_credentials,
            insecure, call_credentials, compression, wait_for_ready, timeout, metadata)

    @staticmethod
    def delete_task(request,
            target,
            options=(),
            channel_credentials=None,
            call_credentials=None,
            insecure=False,
            compression=None,
            wait_for_ready=None,
            timeout=None,
            metadata=None):
        return grpc.experimental.unary_unary(request, target, '/TaskService/delete_task',
            Task__pb2.DeleteTaskRequest.SerializeToString,
            google_dot_protobuf_dot_empty__pb2.Empty.FromString,
            options, channel_credentials,
            insecure, call_credentials, compression, wait_for_ready, timeout, metadata)

    @staticmethod
    def delete_all_tasks(request,
            target,
            options=(),
            channel_credentials=None,
            call_credentials=None,
            insecure=False,
            compression=None,
            wait_for_ready=None,
            timeout=None,
            metadata=None):
        return grpc.experimental.unary_unary(request, target, '/TaskService/delete_all_tasks',
            google_dot_protobuf_dot_empty__pb2.Empty.SerializeToString,
            Task__pb2.DeleteAllTasksResponse.FromString,
            options, channel_credentials,
            insecure, call_credentials, compression, wait_for_ready, timeout, metadata)
