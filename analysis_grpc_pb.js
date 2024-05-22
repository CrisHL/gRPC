// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var analysis_pb = require('./analysis_pb.js');

function serialize_AnalyzeRequest(arg) {
  if (!(arg instanceof analysis_pb.AnalyzeRequest)) {
    throw new Error('Expected argument of type AnalyzeRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_AnalyzeRequest(buffer_arg) {
  return analysis_pb.AnalyzeRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_AnalyzeResponse(arg) {
  if (!(arg instanceof analysis_pb.AnalyzeResponse)) {
    throw new Error('Expected argument of type AnalyzeResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_AnalyzeResponse(buffer_arg) {
  return analysis_pb.AnalyzeResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


var AnalysisServiceService = exports.AnalysisServiceService = {
  chatCompletions: {
    path: '/AnalysisService/chatCompletions',
    requestStream: false,
    responseStream: false,
    requestType: analysis_pb.AnalyzeRequest,
    responseType: analysis_pb.AnalyzeResponse,
    requestSerialize: serialize_AnalyzeRequest,
    requestDeserialize: deserialize_AnalyzeRequest,
    responseSerialize: serialize_AnalyzeResponse,
    responseDeserialize: deserialize_AnalyzeResponse,
  },
};

exports.AnalysisServiceClient = grpc.makeGenericClientConstructor(AnalysisServiceService);
