// package: 
// file: analysis.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "@grpc/grpc-js";
import * as analysis_pb from "./analysis_pb";

interface IAnalysisServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    chatCompletions: IAnalysisServiceService_IchatCompletions;
}

interface IAnalysisServiceService_IchatCompletions extends grpc.MethodDefinition<analysis_pb.AnalyzeRequest, analysis_pb.AnalyzeResponse> {
    path: "/AnalysisService/chatCompletions";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<analysis_pb.AnalyzeRequest>;
    requestDeserialize: grpc.deserialize<analysis_pb.AnalyzeRequest>;
    responseSerialize: grpc.serialize<analysis_pb.AnalyzeResponse>;
    responseDeserialize: grpc.deserialize<analysis_pb.AnalyzeResponse>;
}

export const AnalysisServiceService: IAnalysisServiceService;

export interface IAnalysisServiceServer extends grpc.UntypedServiceImplementation {
    chatCompletions: grpc.handleUnaryCall<analysis_pb.AnalyzeRequest, analysis_pb.AnalyzeResponse>;
}

export interface IAnalysisServiceClient {
    chatCompletions(request: analysis_pb.AnalyzeRequest, callback: (error: grpc.ServiceError | null, response: analysis_pb.AnalyzeResponse) => void): grpc.ClientUnaryCall;
    chatCompletions(request: analysis_pb.AnalyzeRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: analysis_pb.AnalyzeResponse) => void): grpc.ClientUnaryCall;
    chatCompletions(request: analysis_pb.AnalyzeRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: analysis_pb.AnalyzeResponse) => void): grpc.ClientUnaryCall;
}

export class AnalysisServiceClient extends grpc.Client implements IAnalysisServiceClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: Partial<grpc.ClientOptions>);
    public chatCompletions(request: analysis_pb.AnalyzeRequest, callback: (error: grpc.ServiceError | null, response: analysis_pb.AnalyzeResponse) => void): grpc.ClientUnaryCall;
    public chatCompletions(request: analysis_pb.AnalyzeRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: analysis_pb.AnalyzeResponse) => void): grpc.ClientUnaryCall;
    public chatCompletions(request: analysis_pb.AnalyzeRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: analysis_pb.AnalyzeResponse) => void): grpc.ClientUnaryCall;
}
