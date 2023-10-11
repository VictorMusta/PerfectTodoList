# Generated by the gRPC Python protocol compiler plugin. DO NOT EDIT!
"""Client and server classes corresponding to protobuf-defined services."""
import grpc

import TaskRefs_pb2 as TaskRefs__pb2
from google.protobuf import empty_pb2 as google_dot_protobuf_dot_empty__pb2


class TaskRefsServiceStub(object):
    """Missing associated documentation comment in .proto file."""

    def __init__(self, channel):
        """Constructor.

        Args:
            channel: A grpc.Channel.
        """
        self.create_task_ref = channel.unary_unary(
                '/TaskRefsService/create_task_ref',
                request_serializer=TaskRefs__pb2.CreateTaskRefRequest.SerializeToString,
                response_deserializer=google_dot_protobuf_dot_empty__pb2.Empty.FromString,
                )
        self.get_task_ref = channel.unary_unary(
                '/TaskRefsService/get_task_ref',
                request_serializer=TaskRefs__pb2.GetTaskRefRequest.SerializeToString,
                response_deserializer=TaskRefs__pb2.GetTaskRefResponse.FromString,
                )
        self.get_all_task_refs = channel.unary_unary(
                '/TaskRefsService/get_all_task_refs',
                request_serializer=google_dot_protobuf_dot_empty__pb2.Empty.SerializeToString,
                response_deserializer=TaskRefs__pb2.GetAllTaskRefsResponse.FromString,
                )
        self.update_task_ref = channel.unary_unary(
                '/TaskRefsService/update_task_ref',
                request_serializer=TaskRefs__pb2.UpdateTaskRefRequest.SerializeToString,
                response_deserializer=google_dot_protobuf_dot_empty__pb2.Empty.FromString,
                )
        self.delete_task_ref = channel.unary_unary(
                '/TaskRefsService/delete_task_ref',
                request_serializer=TaskRefs__pb2.DeleteTaskRefRequest.SerializeToString,
                response_deserializer=google_dot_protobuf_dot_empty__pb2.Empty.FromString,
                )
        self.delete_all_task_refs = channel.unary_unary(
                '/TaskRefsService/delete_all_task_refs',
                request_serializer=google_dot_protobuf_dot_empty__pb2.Empty.SerializeToString,
                response_deserializer=TaskRefs__pb2.DeleteAllTaskRefsResponse.FromString,
                )


class TaskRefsServiceServicer(object):
    """Missing associated documentation comment in .proto file."""

    def create_task_ref(self, request, context):
        """Missing associated documentation comment in .proto file."""
        context.set_code(grpc.StatusCode.UNIMPLEMENTED)
        context.set_details('Method not implemented!')
        raise NotImplementedError('Method not implemented!')

    def get_task_ref(self, request, context):
        """Missing associated documentation comment in .proto file."""
        context.set_code(grpc.StatusCode.UNIMPLEMENTED)
        context.set_details('Method not implemented!')
        raise NotImplementedError('Method not implemented!')

    def get_all_task_refs(self, request, context):
        """Missing associated documentation comment in .proto file."""
        context.set_code(grpc.StatusCode.UNIMPLEMENTED)
        context.set_details('Method not implemented!')
        raise NotImplementedError('Method not implemented!')

    def update_task_ref(self, request, context):
        """Missing associated documentation comment in .proto file."""
        context.set_code(grpc.StatusCode.UNIMPLEMENTED)
        context.set_details('Method not implemented!')
        raise NotImplementedError('Method not implemented!')

    def delete_task_ref(self, request, context):
        """Missing associated documentation comment in .proto file."""
        context.set_code(grpc.StatusCode.UNIMPLEMENTED)
        context.set_details('Method not implemented!')
        raise NotImplementedError('Method not implemented!')

    def delete_all_task_refs(self, request, context):
        """Missing associated documentation comment in .proto file."""
        context.set_code(grpc.StatusCode.UNIMPLEMENTED)
        context.set_details('Method not implemented!')
        raise NotImplementedError('Method not implemented!')


def add_TaskRefsServiceServicer_to_server(servicer, server):
    rpc_method_handlers = {
            'create_task_ref': grpc.unary_unary_rpc_method_handler(
                    servicer.create_task_ref,
                    request_deserializer=TaskRefs__pb2.CreateTaskRefRequest.FromString,
                    response_serializer=google_dot_protobuf_dot_empty__pb2.Empty.SerializeToString,
            ),
            'get_task_ref': grpc.unary_unary_rpc_method_handler(
                    servicer.get_task_ref,
                    request_deserializer=TaskRefs__pb2.GetTaskRefRequest.FromString,
                    response_serializer=TaskRefs__pb2.GetTaskRefResponse.SerializeToString,
            ),
            'get_all_task_refs': grpc.unary_unary_rpc_method_handler(
                    servicer.get_all_task_refs,
                    request_deserializer=google_dot_protobuf_dot_empty__pb2.Empty.FromString,
                    response_serializer=TaskRefs__pb2.GetAllTaskRefsResponse.SerializeToString,
            ),
            'update_task_ref': grpc.unary_unary_rpc_method_handler(
                    servicer.update_task_ref,
                    request_deserializer=TaskRefs__pb2.UpdateTaskRefRequest.FromString,
                    response_serializer=google_dot_protobuf_dot_empty__pb2.Empty.SerializeToString,
            ),
            'delete_task_ref': grpc.unary_unary_rpc_method_handler(
                    servicer.delete_task_ref,
                    request_deserializer=TaskRefs__pb2.DeleteTaskRefRequest.FromString,
                    response_serializer=google_dot_protobuf_dot_empty__pb2.Empty.SerializeToString,
            ),
            'delete_all_task_refs': grpc.unary_unary_rpc_method_handler(
                    servicer.delete_all_task_refs,
                    request_deserializer=google_dot_protobuf_dot_empty__pb2.Empty.FromString,
                    response_serializer=TaskRefs__pb2.DeleteAllTaskRefsResponse.SerializeToString,
            ),
    }
    generic_handler = grpc.method_handlers_generic_handler(
            'TaskRefsService', rpc_method_handlers)
    server.add_generic_rpc_handlers((generic_handler,))


 # This class is part of an EXPERIMENTAL API.
class TaskRefsService(object):
    """Missing associated documentation comment in .proto file."""

    @staticmethod
    def create_task_ref(request,
            target,
            options=(),
            channel_credentials=None,
            call_credentials=None,
            insecure=False,
            compression=None,
            wait_for_ready=None,
            timeout=None,
            metadata=None):
        return grpc.experimental.unary_unary(request, target, '/TaskRefsService/create_task_ref',
            TaskRefs__pb2.CreateTaskRefRequest.SerializeToString,
            google_dot_protobuf_dot_empty__pb2.Empty.FromString,
            options, channel_credentials,
            insecure, call_credentials, compression, wait_for_ready, timeout, metadata)

    @staticmethod
    def get_task_ref(request,
            target,
            options=(),
            channel_credentials=None,
            call_credentials=None,
            insecure=False,
            compression=None,
            wait_for_ready=None,
            timeout=None,
            metadata=None):
        return grpc.experimental.unary_unary(request, target, '/TaskRefsService/get_task_ref',
            TaskRefs__pb2.GetTaskRefRequest.SerializeToString,
            TaskRefs__pb2.GetTaskRefResponse.FromString,
            options, channel_credentials,
            insecure, call_credentials, compression, wait_for_ready, timeout, metadata)

    @staticmethod
    def get_all_task_refs(request,
            target,
            options=(),
            channel_credentials=None,
            call_credentials=None,
            insecure=False,
            compression=None,
            wait_for_ready=None,
            timeout=None,
            metadata=None):
        return grpc.experimental.unary_unary(request, target, '/TaskRefsService/get_all_task_refs',
            google_dot_protobuf_dot_empty__pb2.Empty.SerializeToString,
            TaskRefs__pb2.GetAllTaskRefsResponse.FromString,
            options, channel_credentials,
            insecure, call_credentials, compression, wait_for_ready, timeout, metadata)

    @staticmethod
    def update_task_ref(request,
            target,
            options=(),
            channel_credentials=None,
            call_credentials=None,
            insecure=False,
            compression=None,
            wait_for_ready=None,
            timeout=None,
            metadata=None):
        return grpc.experimental.unary_unary(request, target, '/TaskRefsService/update_task_ref',
            TaskRefs__pb2.UpdateTaskRefRequest.SerializeToString,
            google_dot_protobuf_dot_empty__pb2.Empty.FromString,
            options, channel_credentials,
            insecure, call_credentials, compression, wait_for_ready, timeout, metadata)

    @staticmethod
    def delete_task_ref(request,
            target,
            options=(),
            channel_credentials=None,
            call_credentials=None,
            insecure=False,
            compression=None,
            wait_for_ready=None,
            timeout=None,
            metadata=None):
        return grpc.experimental.unary_unary(request, target, '/TaskRefsService/delete_task_ref',
            TaskRefs__pb2.DeleteTaskRefRequest.SerializeToString,
            google_dot_protobuf_dot_empty__pb2.Empty.FromString,
            options, channel_credentials,
            insecure, call_credentials, compression, wait_for_ready, timeout, metadata)

    @staticmethod
    def delete_all_task_refs(request,
            target,
            options=(),
            channel_credentials=None,
            call_credentials=None,
            insecure=False,
            compression=None,
            wait_for_ready=None,
            timeout=None,
            metadata=None):
        return grpc.experimental.unary_unary(request, target, '/TaskRefsService/delete_all_task_refs',
            google_dot_protobuf_dot_empty__pb2.Empty.SerializeToString,
            TaskRefs__pb2.DeleteAllTaskRefsResponse.FromString,
            options, channel_credentials,
            insecure, call_credentials, compression, wait_for_ready, timeout, metadata)
