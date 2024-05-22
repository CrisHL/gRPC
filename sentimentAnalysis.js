const Groq = require('groq-sdk');
const groq = new Groq({ apiKey: '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' });

async function performSentimentAnalysis(tweet) {
    const chatCompletion = await groq.chat.completions.create({
        "messages": [
            { "role": "system", "content": "Habla en español latinoamericano" },
            { "role": "user", "content": `¿Qué emociones se presentan en este tweet?, pero solo muestra el sentimiento en una palabra sin más texto: ${tweet}` }
        ],
        "model": "llama3-70b-8192",
        "temperature": 1,
        "max_tokens": 1024,
        "top_p": 1,
        "stream": true,
        "stop": null
    });

    let sentimentScore = '';
    for await (const chunk of chatCompletion) {
        sentimentScore += chunk.choices[0]?.delta?.content || '';
    }

    return sentimentScore.trim().replace(/Emoción:\s*/g, '').replace(/[\n\r]+/g, ' ').trim();
}

module.exports = { performSentimentAnalysis };
