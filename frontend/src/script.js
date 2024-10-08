// Select DOM elements
const chatForm = document.getElementById("chat-form");
const userInput = document.getElementById("user-input");
const chatOutput = document.getElementById("chat-output");

// Event listener for form submission
chatForm.addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent the default form submission

    const message = userInput.value.trim(); // Trim whitespace
    if (message === "") return; // Exit if the input is empty

    appendMessage(message, 'user'); // Append user message with 'user' class
    clearInput(); // Clear input before sending to improve UX

    // Get response from the API
    getResponse(message);
});

// Function to append message to chat output
function appendMessage(message, sender) {
    const messageElement = document.createElement("div");

    // Add appropriate class based on sender
    if (sender === 'user') {
        messageElement.classList.add('user-message'); // User message styling
        messageElement.textContent = message; // Display user message
    } else {
        messageElement.classList.add('enzo-message'); // Enzo message styling
        messageElement.textContent = message; // Display Enzo message
    }

    chatOutput.appendChild(messageElement);
    chatOutput.scrollTop = chatOutput.scrollHeight; // Auto-scroll
}

// Function to get a response from the API
function getResponse(userMessage) {
    // Show loading message
    const loadingMessage = "Enzo is typing...";
    appendMessage(loadingMessage, 'enzo');

    fetch('http://localhost:3000/api/chat', { // Ensure you're pointing to the correct API URL
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ message: userMessage }), // Send user message to the API
    })
    .then(response => {
        // Remove loading message
        chatOutput.removeChild(chatOutput.lastChild); // Remove the loading message

        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(data => {
        const botResponse = data.response; // Adjust according to your API response structure
        appendMessage(botResponse, 'enzo'); // Append the bot response with 'enzo' class
    })
    .catch((error) => {
        console.error('Error:', error);
        appendMessage("Sorry, there was an error. Please try again.", 'enzo'); // Append error message
    });
}

// Function to clear input field
function clearInput() {
    userInput.value = '';
}
