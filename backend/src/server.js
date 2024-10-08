// src/server.js

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const chatRoutes = require('./routes/chatRoutes');
// Ensure the path is correct

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Use chat routes
app.use('/api', chatRoutes);

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
