const express = require('express');
const router = express.Router();

// Chat API route
router.post('/chat', (req, res) => {
    const userMessage = req.body.message.toLowerCase(); // Convert message to lowercase for easier matching
    let botResponse = "I'm not sure how to respond to that.";

    // Simple responses based on user input
    if (userMessage.includes("hi") || userMessage.includes("hello")) {
        botResponse = "Hello! How can I assist you today?";
    } else if (userMessage.includes("yes")) {
        botResponse = "Great! What would you like to do next?";
    } else if (userMessage.includes("how are you")) {
        botResponse = "I'm just a bot, but thanks for asking! How can I help you?";
    }
    // Add more conditions as needed

    // Send the response back to the client
    res.json({ response: botResponse });
});

module.exports = router;
