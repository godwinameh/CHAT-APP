

function sendMessage() {
    var messageInput = document.getElementById('message-input');
    var chatDisplay = document.getElementById('chat-display');

    if (messageInput.value.trim() !== '') {
        var message = document.createElement('div');
        message.className = 'message';
        message.textContent = messageInput.value;
        chatDisplay.appendChild(message);

        // Clear the input field
        messageInput.value = '';

        // Scroll to the bottom of the chat display
        chatDisplay.scrollTop = chatDisplay.scrollHeight;
    }
}
