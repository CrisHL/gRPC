const grpc = require('@grpc/grpc-js');
const { AnalysisServiceClient } = require('./analysis_grpc_pb');
const { AnalyzeRequest, Tweet } = require('./analysis_pb');

// Configurar las credenciales
const credentials = grpc.credentials.createInsecure();

// Crear una instancia del cliente gRPC
const client = new AnalysisServiceClient('localhost:50051', credentials);

// Crear una solicitud con el array de tweets
const tweets = [
    { tweet: '@elonmusk Dear Elon, Im a game dev. and I am making a game about colonizing Mars with you and SpaceX in it. If you think its cool, all I need is the "Go ahead" to use your name and Logos. I will post this every day for a year or until I get a Yes or a No! 154 / 365' },
    { tweet: '@lvladimirovBG You can steal our name/logos & we probably won’t sue you' },
    { tweet: 'New hero in Hero Wars: Lara Croft awaits you! Join in! Limited time offer until May 27th👇' }
];

const request = new AnalyzeRequest();
const tweetMessages = tweets.map(tweet => {
    const tweetMessage = new Tweet();
    tweetMessage.setTweet(tweet.tweet);
    return tweetMessage;
});
request.setTweetsList(tweetMessages);

// Hacer la llamada al servidor y manejar la respuesta
client.chatCompletions(request, (error, response) => {
    if (error) {
        console.error('Error en la comunicación con el servidor:', error);
        return;
    }

    const responsesList = response.getResponsesList();
    responsesList.forEach(res => {
        console.log(`Emotion: ${res.getEmotion()}`);
    });
});
