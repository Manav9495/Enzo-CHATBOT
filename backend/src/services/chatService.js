const axios = require("axios");

const getResponse = async (message) => {
    // Call to external API (e.g., OpenAI API)
    const response = await axios.post('YOUR_EXTERNAL_API_ENDPOINT', {
        prompt: message,
        // Additional parameters based on your API
    }, {
        headers: {
            'Authorization': `Bearer ${process.env.YOUR_API_KEY}`,
            'Content-Type': 'application/json'
        }
    });

    return response.data.choices[0].text; // Adjust according to the API response
};

module.exports = { getResponse };
