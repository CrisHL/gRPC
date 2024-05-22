const grpc = require('@grpc/grpc-js');
const { AnalysisServiceService } = require('./analysis_grpc_pb');
const { AnalyzeResponse, AnalyzeResponseItem } = require('./analysis_pb');
const { performSentimentAnalysis } = require('./sentimentAnalysis');
const { initializeServer, bindServer } = require('./serverUtils');

function handleChatCompletions(call, callback) {
    const tweets = call.request.getTweetsList();
    const responses = [];

    Promise.all(tweets.map(async tweet => {
        const responseItem = new AnalyzeResponseItem();
        const content = tweet.getTweet();
        try {
            const sentimentAnalysis = await performSentimentAnalysis(content);
            responseItem.setEmotion(sentimentAnalysis);
        } catch (error) {
            responseItem.setEmotion(`Error: ${error.message}`);
        }
        responses.push(responseItem);
    })).then(() => {
        const responseList = new AnalyzeResponse();
        responseList.setResponsesList(responses);
        callback(null, responseList);
    });
}

const server = initializeServer(AnalysisServiceService, {
    chatCompletions: handleChatCompletions,
});

const port = process.env.PORT || 50051;
bindServer(server, port);
