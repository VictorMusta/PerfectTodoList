# -*- coding: utf-8 -*-
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: TaskRef.proto
"""Generated protocol buffer code."""
from google.protobuf import descriptor as _descriptor
from google.protobuf import descriptor_pool as _descriptor_pool
from google.protobuf import symbol_database as _symbol_database
from google.protobuf.internal import builder as _builder
# @@protoc_insertion_point(imports)

_sym_db = _symbol_database.Default()


from google.protobuf import empty_pb2 as google_dot_protobuf_dot_empty__pb2


DESCRIPTOR = _descriptor_pool.Default().AddSerializedFile(b'\n\rTaskRef.proto\x1a\x1bgoogle/protobuf/empty.proto\"@\n\x07TaskRef\x12\x13\n\x0bid_task_ref\x18\x01 \x01(\t\x12\x0f\n\x07id_task\x18\x02 \x01(\t\x12\x0f\n\x07id_list\x18\x03 \x01(\x05\"8\n\x14\x43reateTaskRefRequest\x12\x0f\n\x07id_task\x18\x01 \x01(\t\x12\x0f\n\x07id_list\x18\x02 \x01(\x05\"(\n\x11GetTaskRefRequest\x12\x13\n\x0bid_task_ref\x18\x01 \x01(\t\"0\n\x12GetTaskRefResponse\x12\x1a\n\x08task_ref\x18\x01 \x01(\x0b\x32\x08.TaskRef\"+\n\x14\x44\x65leteTaskRefRequest\x12\x13\n\x0bid_task_ref\x18\x01 \x01(\t\"M\n\x14UpdateTaskRefRequest\x12\x13\n\x0bid_task_ref\x18\x01 \x01(\t\x12\x0f\n\x07id_task\x18\x02 \x01(\t\x12\x0f\n\x07id_list\x18\x03 \x01(\x05\"4\n\x15GetAllTaskRefResponse\x12\x1b\n\ttask_refs\x18\x01 \x03(\x0b\x32\x08.TaskRef\"?\n\x18\x44\x65leteAllTaskRefResponse\x12#\n\x1b\x61mount_of_deleted_task_refs\x18\x01 \x01(\x05\x32\x9f\x03\n\x0eTaskRefService\x12@\n\x0f\x63reate_task_ref\x12\x15.CreateTaskRefRequest\x1a\x16.google.protobuf.Empty\x12\x37\n\x0cget_task_ref\x12\x12.GetTaskRefRequest\x1a\x13.GetTaskRefResponse\x12\x43\n\x11get_all_task_refs\x12\x16.google.protobuf.Empty\x1a\x16.GetAllTaskRefResponse\x12@\n\x0fupdate_task_ref\x12\x15.UpdateTaskRefRequest\x1a\x16.google.protobuf.Empty\x12@\n\x0f\x64\x65lete_task_ref\x12\x15.DeleteTaskRefRequest\x1a\x16.google.protobuf.Empty\x12I\n\x14\x64\x65lete_all_task_refs\x12\x16.google.protobuf.Empty\x1a\x19.DeleteAllTaskRefResponseb\x06proto3')

_globals = globals()
_builder.BuildMessageAndEnumDescriptors(DESCRIPTOR, _globals)
_builder.BuildTopDescriptorsAndMessages(DESCRIPTOR, 'TaskRef_pb2', _globals)
if _descriptor._USE_C_DESCRIPTORS == False:
  DESCRIPTOR._options = None
  _globals['_TASKREF']._serialized_start=46
  _globals['_TASKREF']._serialized_end=110
  _globals['_CREATETASKREFREQUEST']._serialized_start=112
  _globals['_CREATETASKREFREQUEST']._serialized_end=168
  _globals['_GETTASKREFREQUEST']._serialized_start=170
  _globals['_GETTASKREFREQUEST']._serialized_end=210
  _globals['_GETTASKREFRESPONSE']._serialized_start=212
  _globals['_GETTASKREFRESPONSE']._serialized_end=260
  _globals['_DELETETASKREFREQUEST']._serialized_start=262
  _globals['_DELETETASKREFREQUEST']._serialized_end=305
  _globals['_UPDATETASKREFREQUEST']._serialized_start=307
  _globals['_UPDATETASKREFREQUEST']._serialized_end=384
  _globals['_GETALLTASKREFRESPONSE']._serialized_start=386
  _globals['_GETALLTASKREFRESPONSE']._serialized_end=438
  _globals['_DELETEALLTASKREFRESPONSE']._serialized_start=440
  _globals['_DELETEALLTASKREFRESPONSE']._serialized_end=503
  _globals['_TASKREFSERVICE']._serialized_start=506
  _globals['_TASKREFSERVICE']._serialized_end=921
# @@protoc_insertion_point(module_scope)