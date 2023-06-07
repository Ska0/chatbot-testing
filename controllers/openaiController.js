const openai = require('../config/openaiConfig.js')

const generateChatCompletion = async (title) => {

    const chatCompletion = await openai.createChatCompletion({
        model: 'gpt-3.5-turbo',
        messages: [
            {
                role: 'user',
                content: `Answer the following question ${title}`
            }
        ],
        max_tokens: 200
    })

    console.log(chatCompletion.data.choices[0].message)
}

module.exports = { generateChatCompletion }