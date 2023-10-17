import * as jspb from 'google-protobuf'

import * as google_protobuf_empty_pb from 'google-protobuf/google/protobuf/empty_pb';


export class Task extends jspb.Message {
  getIdTask(): string;
  setIdTask(value: string): Task;

  getTitle(): string;
  setTitle(value: string): Task;

  getColor(): string;
  setColor(value: string): Task;

  getResolved(): Status;
  setResolved(value: Status): Task;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Task.AsObject;
  static toObject(includeInstance: boolean, msg: Task): Task.AsObject;
  static serializeBinaryToWriter(message: Task, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Task;
  static deserializeBinaryFromReader(message: Task, reader: jspb.BinaryReader): Task;
}

export namespace Task {
  export type AsObject = {
    idTask: string,
    title: string,
    color: string,
    resolved: Status,
  }
}

export class CreateTaskRequest extends jspb.Message {
  getTitle(): string;
  setTitle(value: string): CreateTaskRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateTaskRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateTaskRequest): CreateTaskRequest.AsObject;
  static serializeBinaryToWriter(message: CreateTaskRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateTaskRequest;
  static deserializeBinaryFromReader(message: CreateTaskRequest, reader: jspb.BinaryReader): CreateTaskRequest;
}

export namespace CreateTaskRequest {
  export type AsObject = {
    title: string,
  }
}

export class CreateTaskResponse extends jspb.Message {
  getIdTask(): string;
  setIdTask(value: string): CreateTaskResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateTaskResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CreateTaskResponse): CreateTaskResponse.AsObject;
  static serializeBinaryToWriter(message: CreateTaskResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateTaskResponse;
  static deserializeBinaryFromReader(message: CreateTaskResponse, reader: jspb.BinaryReader): CreateTaskResponse;
}

export namespace CreateTaskResponse {
  export type AsObject = {
    idTask: string,
  }
}

export class GetTaskRequest extends jspb.Message {
  getIdTask(): string;
  setIdTask(value: string): GetTaskRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetTaskRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetTaskRequest): GetTaskRequest.AsObject;
  static serializeBinaryToWriter(message: GetTaskRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetTaskRequest;
  static deserializeBinaryFromReader(message: GetTaskRequest, reader: jspb.BinaryReader): GetTaskRequest;
}

export namespace GetTaskRequest {
  export type AsObject = {
    idTask: string,
  }
}

export class GetTaskResponse extends jspb.Message {
  getTask(): Task | undefined;
  setTask(value?: Task): GetTaskResponse;
  hasTask(): boolean;
  clearTask(): GetTaskResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetTaskResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetTaskResponse): GetTaskResponse.AsObject;
  static serializeBinaryToWriter(message: GetTaskResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetTaskResponse;
  static deserializeBinaryFromReader(message: GetTaskResponse, reader: jspb.BinaryReader): GetTaskResponse;
}

export namespace GetTaskResponse {
  export type AsObject = {
    task?: Task.AsObject,
  }
}

export class UpdateTaskRequest extends jspb.Message {
  getIdTask(): string;
  setIdTask(value: string): UpdateTaskRequest;

  getTitle(): string;
  setTitle(value: string): UpdateTaskRequest;

  getColor(): string;
  setColor(value: string): UpdateTaskRequest;

  getResolved(): Status;
  setResolved(value: Status): UpdateTaskRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateTaskRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateTaskRequest): UpdateTaskRequest.AsObject;
  static serializeBinaryToWriter(message: UpdateTaskRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateTaskRequest;
  static deserializeBinaryFromReader(message: UpdateTaskRequest, reader: jspb.BinaryReader): UpdateTaskRequest;
}

export namespace UpdateTaskRequest {
  export type AsObject = {
    idTask: string,
    title: string,
    color: string,
    resolved: Status,
  }
}

export class DeleteTaskRequest extends jspb.Message {
  getIdTask(): string;
  setIdTask(value: string): DeleteTaskRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteTaskRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteTaskRequest): DeleteTaskRequest.AsObject;
  static serializeBinaryToWriter(message: DeleteTaskRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteTaskRequest;
  static deserializeBinaryFromReader(message: DeleteTaskRequest, reader: jspb.BinaryReader): DeleteTaskRequest;
}

export namespace DeleteTaskRequest {
  export type AsObject = {
    idTask: string,
  }
}

export class GetAllTasksResponse extends jspb.Message {
  getTasksList(): Array<Task>;
  setTasksList(value: Array<Task>): GetAllTasksResponse;
  clearTasksList(): GetAllTasksResponse;
  addTasks(value?: Task, index?: number): Task;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetAllTasksResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetAllTasksResponse): GetAllTasksResponse.AsObject;
  static serializeBinaryToWriter(message: GetAllTasksResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetAllTasksResponse;
  static deserializeBinaryFromReader(message: GetAllTasksResponse, reader: jspb.BinaryReader): GetAllTasksResponse;
}

export namespace GetAllTasksResponse {
  export type AsObject = {
    tasksList: Array<Task.AsObject>,
  }
}

export class DeleteAllTasksResponse extends jspb.Message {
  getAmountOfDeletedTasks(): number;
  setAmountOfDeletedTasks(value: number): DeleteAllTasksResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteAllTasksResponse.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteAllTasksResponse): DeleteAllTasksResponse.AsObject;
  static serializeBinaryToWriter(message: DeleteAllTasksResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteAllTasksResponse;
  static deserializeBinaryFromReader(message: DeleteAllTasksResponse, reader: jspb.BinaryReader): DeleteAllTasksResponse;
}

export namespace DeleteAllTasksResponse {
  export type AsObject = {
    amountOfDeletedTasks: number,
  }
}

export enum Status { 
  RESOLVED = 0,
  UNRESOLVED = 1,
}
