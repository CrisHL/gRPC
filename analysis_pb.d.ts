// package: 
// file: analysis.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";

export class Tweet extends jspb.Message { 
    getTweet(): string;
    setTweet(value: string): Tweet;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Tweet.AsObject;
    static toObject(includeInstance: boolean, msg: Tweet): Tweet.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Tweet, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Tweet;
    static deserializeBinaryFromReader(message: Tweet, reader: jspb.BinaryReader): Tweet;
}

export namespace Tweet {
    export type AsObject = {
        tweet: string,
    }
}

export class AnalyzeRequest extends jspb.Message { 
    clearTweetsList(): void;
    getTweetsList(): Array<Tweet>;
    setTweetsList(value: Array<Tweet>): AnalyzeRequest;
    addTweets(value?: Tweet, index?: number): Tweet;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): AnalyzeRequest.AsObject;
    static toObject(includeInstance: boolean, msg: AnalyzeRequest): AnalyzeRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: AnalyzeRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): AnalyzeRequest;
    static deserializeBinaryFromReader(message: AnalyzeRequest, reader: jspb.BinaryReader): AnalyzeRequest;
}

export namespace AnalyzeRequest {
    export type AsObject = {
        tweetsList: Array<Tweet.AsObject>,
    }
}

export class AnalyzeResponse extends jspb.Message { 
    clearResponsesList(): void;
    getResponsesList(): Array<AnalyzeResponseItem>;
    setResponsesList(value: Array<AnalyzeResponseItem>): AnalyzeResponse;
    addResponses(value?: AnalyzeResponseItem, index?: number): AnalyzeResponseItem;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): AnalyzeResponse.AsObject;
    static toObject(includeInstance: boolean, msg: AnalyzeResponse): AnalyzeResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: AnalyzeResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): AnalyzeResponse;
    static deserializeBinaryFromReader(message: AnalyzeResponse, reader: jspb.BinaryReader): AnalyzeResponse;
}

export namespace AnalyzeResponse {
    export type AsObject = {
        responsesList: Array<AnalyzeResponseItem.AsObject>,
    }
}

export class AnalyzeResponseItem extends jspb.Message { 
    getEmotion(): string;
    setEmotion(value: string): AnalyzeResponseItem;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): AnalyzeResponseItem.AsObject;
    static toObject(includeInstance: boolean, msg: AnalyzeResponseItem): AnalyzeResponseItem.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: AnalyzeResponseItem, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): AnalyzeResponseItem;
    static deserializeBinaryFromReader(message: AnalyzeResponseItem, reader: jspb.BinaryReader): AnalyzeResponseItem;
}

export namespace AnalyzeResponseItem {
    export type AsObject = {
        emotion: string,
    }
}
