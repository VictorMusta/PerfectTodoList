/**
 * @fileoverview gRPC-Web generated client stub for 
 * @enhanceable
 * @public
 */

// Code generated by protoc-gen-grpc-web. DO NOT EDIT.
// versions:
// 	protoc-gen-grpc-web v1.4.2
// 	protoc              v3.21.12
// source: TaskRef.proto


/* eslint-disable */
// @ts-nocheck


import * as grpcWeb from 'grpc-web';

import * as TaskRef_pb from './TaskRef_pb';
import * as google_protobuf_empty_pb from 'google-protobuf/google/protobuf/empty_pb';


export class TaskRefServiceClient {
  client_: grpcWeb.AbstractClientBase;
  hostname_: string;
  credentials_: null | { [index: string]: string; };
  options_: null | { [index: string]: any; };

  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; }) {
    if (!options) options = {};
    if (!credentials) credentials = {};
    options['format'] = 'text';

    this.client_ = new grpcWeb.GrpcWebClientBase(options);
    this.hostname_ = hostname.replace(/\/+$/, '');
    this.credentials_ = credentials;
    this.options_ = options;
  }

  methodDescriptorcreate_task_ref = new grpcWeb.MethodDescriptor(
    '/TaskRefService/create_task_ref',
    grpcWeb.MethodType.UNARY,
    TaskRef_pb.CreateTaskRefRequest,
    google_protobuf_empty_pb.Empty,
    (request: TaskRef_pb.CreateTaskRefRequest) => {
      return request.serializeBinary();
    },
    google_protobuf_empty_pb.Empty.deserializeBinary
  );

  create_task_ref(
    request: TaskRef_pb.CreateTaskRefRequest,
    metadata: grpcWeb.Metadata | null): Promise<google_protobuf_empty_pb.Empty>;

  create_task_ref(
    request: TaskRef_pb.CreateTaskRefRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: google_protobuf_empty_pb.Empty) => void): grpcWeb.ClientReadableStream<google_protobuf_empty_pb.Empty>;

  create_task_ref(
    request: TaskRef_pb.CreateTaskRefRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: google_protobuf_empty_pb.Empty) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/TaskRefService/create_task_ref',
        request,
        metadata || {},
        this.methodDescriptorcreate_task_ref,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/TaskRefService/create_task_ref',
    request,
    metadata || {},
    this.methodDescriptorcreate_task_ref);
  }

  methodDescriptorget_task_ref = new grpcWeb.MethodDescriptor(
    '/TaskRefService/get_task_ref',
    grpcWeb.MethodType.UNARY,
    TaskRef_pb.GetTaskRefRequest,
    TaskRef_pb.GetTaskRefResponse,
    (request: TaskRef_pb.GetTaskRefRequest) => {
      return request.serializeBinary();
    },
    TaskRef_pb.GetTaskRefResponse.deserializeBinary
  );

  get_task_ref(
    request: TaskRef_pb.GetTaskRefRequest,
    metadata: grpcWeb.Metadata | null): Promise<TaskRef_pb.GetTaskRefResponse>;

  get_task_ref(
    request: TaskRef_pb.GetTaskRefRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: TaskRef_pb.GetTaskRefResponse) => void): grpcWeb.ClientReadableStream<TaskRef_pb.GetTaskRefResponse>;

  get_task_ref(
    request: TaskRef_pb.GetTaskRefRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: TaskRef_pb.GetTaskRefResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/TaskRefService/get_task_ref',
        request,
        metadata || {},
        this.methodDescriptorget_task_ref,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/TaskRefService/get_task_ref',
    request,
    metadata || {},
    this.methodDescriptorget_task_ref);
  }

  methodDescriptorget_all_task_refs = new grpcWeb.MethodDescriptor(
    '/TaskRefService/get_all_task_refs',
    grpcWeb.MethodType.UNARY,
    google_protobuf_empty_pb.Empty,
    TaskRef_pb.GetAllTaskRefResponse,
    (request: google_protobuf_empty_pb.Empty) => {
      return request.serializeBinary();
    },
    TaskRef_pb.GetAllTaskRefResponse.deserializeBinary
  );

  get_all_task_refs(
    request: google_protobuf_empty_pb.Empty,
    metadata: grpcWeb.Metadata | null): Promise<TaskRef_pb.GetAllTaskRefResponse>;

  get_all_task_refs(
    request: google_protobuf_empty_pb.Empty,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: TaskRef_pb.GetAllTaskRefResponse) => void): grpcWeb.ClientReadableStream<TaskRef_pb.GetAllTaskRefResponse>;

  get_all_task_refs(
    request: google_protobuf_empty_pb.Empty,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: TaskRef_pb.GetAllTaskRefResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/TaskRefService/get_all_task_refs',
        request,
        metadata || {},
        this.methodDescriptorget_all_task_refs,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/TaskRefService/get_all_task_refs',
    request,
    metadata || {},
    this.methodDescriptorget_all_task_refs);
  }

  methodDescriptorupdate_task_ref = new grpcWeb.MethodDescriptor(
    '/TaskRefService/update_task_ref',
    grpcWeb.MethodType.UNARY,
    TaskRef_pb.UpdateTaskRefRequest,
    google_protobuf_empty_pb.Empty,
    (request: TaskRef_pb.UpdateTaskRefRequest) => {
      return request.serializeBinary();
    },
    google_protobuf_empty_pb.Empty.deserializeBinary
  );

  update_task_ref(
    request: TaskRef_pb.UpdateTaskRefRequest,
    metadata: grpcWeb.Metadata | null): Promise<google_protobuf_empty_pb.Empty>;

  update_task_ref(
    request: TaskRef_pb.UpdateTaskRefRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: google_protobuf_empty_pb.Empty) => void): grpcWeb.ClientReadableStream<google_protobuf_empty_pb.Empty>;

  update_task_ref(
    request: TaskRef_pb.UpdateTaskRefRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: google_protobuf_empty_pb.Empty) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/TaskRefService/update_task_ref',
        request,
        metadata || {},
        this.methodDescriptorupdate_task_ref,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/TaskRefService/update_task_ref',
    request,
    metadata || {},
    this.methodDescriptorupdate_task_ref);
  }

  methodDescriptordelete_task_ref = new grpcWeb.MethodDescriptor(
    '/TaskRefService/delete_task_ref',
    grpcWeb.MethodType.UNARY,
    TaskRef_pb.DeleteTaskRefRequest,
    google_protobuf_empty_pb.Empty,
    (request: TaskRef_pb.DeleteTaskRefRequest) => {
      return request.serializeBinary();
    },
    google_protobuf_empty_pb.Empty.deserializeBinary
  );

  delete_task_ref(
    request: TaskRef_pb.DeleteTaskRefRequest,
    metadata: grpcWeb.Metadata | null): Promise<google_protobuf_empty_pb.Empty>;

  delete_task_ref(
    request: TaskRef_pb.DeleteTaskRefRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: google_protobuf_empty_pb.Empty) => void): grpcWeb.ClientReadableStream<google_protobuf_empty_pb.Empty>;

  delete_task_ref(
    request: TaskRef_pb.DeleteTaskRefRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: google_protobuf_empty_pb.Empty) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/TaskRefService/delete_task_ref',
        request,
        metadata || {},
        this.methodDescriptordelete_task_ref,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/TaskRefService/delete_task_ref',
    request,
    metadata || {},
    this.methodDescriptordelete_task_ref);
  }

  methodDescriptordelete_all_task_refs = new grpcWeb.MethodDescriptor(
    '/TaskRefService/delete_all_task_refs',
    grpcWeb.MethodType.UNARY,
    google_protobuf_empty_pb.Empty,
    TaskRef_pb.DeleteAllTaskRefResponse,
    (request: google_protobuf_empty_pb.Empty) => {
      return request.serializeBinary();
    },
    TaskRef_pb.DeleteAllTaskRefResponse.deserializeBinary
  );

  delete_all_task_refs(
    request: google_protobuf_empty_pb.Empty,
    metadata: grpcWeb.Metadata | null): Promise<TaskRef_pb.DeleteAllTaskRefResponse>;

  delete_all_task_refs(
    request: google_protobuf_empty_pb.Empty,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: TaskRef_pb.DeleteAllTaskRefResponse) => void): grpcWeb.ClientReadableStream<TaskRef_pb.DeleteAllTaskRefResponse>;

  delete_all_task_refs(
    request: google_protobuf_empty_pb.Empty,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: TaskRef_pb.DeleteAllTaskRefResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/TaskRefService/delete_all_task_refs',
        request,
        metadata || {},
        this.methodDescriptordelete_all_task_refs,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/TaskRefService/delete_all_task_refs',
    request,
    metadata || {},
    this.methodDescriptordelete_all_task_refs);
  }

}

