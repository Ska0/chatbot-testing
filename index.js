const readline = require('readline');
const { generateChatCompletion } = require('./controllers/openaiController')

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

rl.question('Enter your question: \n', generateChatCompletion)