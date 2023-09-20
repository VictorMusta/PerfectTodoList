import * as jspb from 'google-protobuf'



export class TaskRequest extends jspb.Message {
  getId(): number;
  setId(value: number): TaskRequest;

  getTitle(): string;
  setTitle(value: string): TaskRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TaskRequest.AsObject;
  static toObject(includeInstance: boolean, msg: TaskRequest): TaskRequest.AsObject;
  static serializeBinaryToWriter(message: TaskRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TaskRequest;
  static deserializeBinaryFromReader(message: TaskRequest, reader: jspb.BinaryReader): TaskRequest;
}

export namespace TaskRequest {
  export type AsObject = {
    id: number,
    title: string,
  }
}

export class ListRequest extends jspb.Message {
  getTaskid(): string;
  setTaskid(value: string): ListRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListRequest): ListRequest.AsObject;
  static serializeBinaryToWriter(message: ListRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListRequest;
  static deserializeBinaryFromReader(message: ListRequest, reader: jspb.BinaryReader): ListRequest;
}

export namespace ListRequest {
  export type AsObject = {
    taskid: string,
  }
}

export class Task extends jspb.Message {
  getId(): number;
  setId(value: number): Task;

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
    id: number,
    title: string,
    color: string,
    resolved: Status,
  }
}

export class TaskResponse extends jspb.Message {
  getTask(): Task | undefined;
  setTask(value?: Task): TaskResponse;
  hasTask(): boolean;
  clearTask(): TaskResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TaskResponse.AsObject;
  static toObject(includeInstance: boolean, msg: TaskResponse): TaskResponse.AsObject;
  static serializeBinaryToWriter(message: TaskResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TaskResponse;
  static deserializeBinaryFromReader(message: TaskResponse, reader: jspb.BinaryReader): TaskResponse;
}

export namespace TaskResponse {
  export type AsObject = {
    task?: Task.AsObject,
  }
}

export class TaskListResponse extends jspb.Message {
  getTaskList(): Array<Task>;
  setTaskList(value: Array<Task>): TaskListResponse;
  clearTaskList(): TaskListResponse;
  addTask(value?: Task, index?: number): Task;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TaskListResponse.AsObject;
  static toObject(includeInstance: boolean, msg: TaskListResponse): TaskListResponse.AsObject;
  static serializeBinaryToWriter(message: TaskListResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TaskListResponse;
  static deserializeBinaryFromReader(message: TaskListResponse, reader: jspb.BinaryReader): TaskListResponse;
}

export namespace TaskListResponse {
  export type AsObject = {
    taskList: Array<Task.AsObject>,
  }
}

export enum Status { 
  RESOLVED = 0,
  UNRESOLVED = 1,
}
