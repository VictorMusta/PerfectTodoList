import * as jspb from 'google-protobuf'

import * as google_protobuf_empty_pb from 'google-protobuf/google/protobuf/empty_pb';


export class TaskRef extends jspb.Message {
  getIdTaskRef(): string;
  setIdTaskRef(value: string): TaskRef;

  getIdTask(): string;
  setIdTask(value: string): TaskRef;

  getIdList(): number;
  setIdList(value: number): TaskRef;

  getSelected(): boolean;
  setSelected(value: boolean): TaskRef;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TaskRef.AsObject;
  static toObject(includeInstance: boolean, msg: TaskRef): TaskRef.AsObject;
  static serializeBinaryToWriter(message: TaskRef, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TaskRef;
  static deserializeBinaryFromReader(message: TaskRef, reader: jspb.BinaryReader): TaskRef;
}

export namespace TaskRef {
  export type AsObject = {
    idTaskRef: string,
    idTask: string,
    idList: number,
    selected: boolean,
  }
}

export class CreateTaskRefRequest extends jspb.Message {
  getIdTask(): string;
  setIdTask(value: string): CreateTaskRefRequest;

  getIdList(): number;
  setIdList(value: number): CreateTaskRefRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateTaskRefRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateTaskRefRequest): CreateTaskRefRequest.AsObject;
  static serializeBinaryToWriter(message: CreateTaskRefRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateTaskRefRequest;
  static deserializeBinaryFromReader(message: CreateTaskRefRequest, reader: jspb.BinaryReader): CreateTaskRefRequest;
}

export namespace CreateTaskRefRequest {
  export type AsObject = {
    idTask: string,
    idList: number,
  }
}

export class GetTaskRefRequest extends jspb.Message {
  getIdTaskRef(): string;
  setIdTaskRef(value: string): GetTaskRefRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetTaskRefRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetTaskRefRequest): GetTaskRefRequest.AsObject;
  static serializeBinaryToWriter(message: GetTaskRefRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetTaskRefRequest;
  static deserializeBinaryFromReader(message: GetTaskRefRequest, reader: jspb.BinaryReader): GetTaskRefRequest;
}

export namespace GetTaskRefRequest {
  export type AsObject = {
    idTaskRef: string,
  }
}

export class GetTaskRefResponse extends jspb.Message {
  getTaskRef(): TaskRef | undefined;
  setTaskRef(value?: TaskRef): GetTaskRefResponse;
  hasTaskRef(): boolean;
  clearTaskRef(): GetTaskRefResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetTaskRefResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetTaskRefResponse): GetTaskRefResponse.AsObject;
  static serializeBinaryToWriter(message: GetTaskRefResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetTaskRefResponse;
  static deserializeBinaryFromReader(message: GetTaskRefResponse, reader: jspb.BinaryReader): GetTaskRefResponse;
}

export namespace GetTaskRefResponse {
  export type AsObject = {
    taskRef?: TaskRef.AsObject,
  }
}

export class DeleteTaskRefRequest extends jspb.Message {
  getIdTaskRef(): string;
  setIdTaskRef(value: string): DeleteTaskRefRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteTaskRefRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteTaskRefRequest): DeleteTaskRefRequest.AsObject;
  static serializeBinaryToWriter(message: DeleteTaskRefRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteTaskRefRequest;
  static deserializeBinaryFromReader(message: DeleteTaskRefRequest, reader: jspb.BinaryReader): DeleteTaskRefRequest;
}

export namespace DeleteTaskRefRequest {
  export type AsObject = {
    idTaskRef: string,
  }
}

export class UpdateTaskRefRequest extends jspb.Message {
  getIdTaskRef(): string;
  setIdTaskRef(value: string): UpdateTaskRefRequest;

  getIdTask(): string;
  setIdTask(value: string): UpdateTaskRefRequest;

  getIdList(): number;
  setIdList(value: number): UpdateTaskRefRequest;

  getSelected(): boolean;
  setSelected(value: boolean): UpdateTaskRefRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateTaskRefRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateTaskRefRequest): UpdateTaskRefRequest.AsObject;
  static serializeBinaryToWriter(message: UpdateTaskRefRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateTaskRefRequest;
  static deserializeBinaryFromReader(message: UpdateTaskRefRequest, reader: jspb.BinaryReader): UpdateTaskRefRequest;
}

export namespace UpdateTaskRefRequest {
  export type AsObject = {
    idTaskRef: string,
    idTask: string,
    idList: number,
    selected: boolean,
  }
}

export class GetAllTaskRefsResponse extends jspb.Message {
  getTaskRefsList(): Array<TaskRef>;
  setTaskRefsList(value: Array<TaskRef>): GetAllTaskRefsResponse;
  clearTaskRefsList(): GetAllTaskRefsResponse;
  addTaskRefs(value?: TaskRef, index?: number): TaskRef;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetAllTaskRefsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetAllTaskRefsResponse): GetAllTaskRefsResponse.AsObject;
  static serializeBinaryToWriter(message: GetAllTaskRefsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetAllTaskRefsResponse;
  static deserializeBinaryFromReader(message: GetAllTaskRefsResponse, reader: jspb.BinaryReader): GetAllTaskRefsResponse;
}

export namespace GetAllTaskRefsResponse {
  export type AsObject = {
    taskRefsList: Array<TaskRef.AsObject>,
  }
}

export class DeleteAllTaskRefsResponse extends jspb.Message {
  getAmountOfDeletedTaskRefs(): number;
  setAmountOfDeletedTaskRefs(value: number): DeleteAllTaskRefsResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteAllTaskRefsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteAllTaskRefsResponse): DeleteAllTaskRefsResponse.AsObject;
  static serializeBinaryToWriter(message: DeleteAllTaskRefsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteAllTaskRefsResponse;
  static deserializeBinaryFromReader(message: DeleteAllTaskRefsResponse, reader: jspb.BinaryReader): DeleteAllTaskRefsResponse;
}

export namespace DeleteAllTaskRefsResponse {
  export type AsObject = {
    amountOfDeletedTaskRefs: number,
  }
}

