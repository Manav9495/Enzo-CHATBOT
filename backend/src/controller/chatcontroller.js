const { getResponse } = require("backend/src/services");

const handleChat = async (req, res) => {
    try {
        const userMessage = req.body.message;
        const botResponse = await getResponse(userMessage);
        res.json({ response: botResponse });
    } catch (error) {
        console.error(error);
        res.status(500).json({ response: "An error occurred." });
    }
};

module.exports = { handleChat };
