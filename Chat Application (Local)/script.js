const chatBox = document.getElementById('chat-box');
const messageInput = document.getElementById('message');

document.getElementById('send').addEventListener('click', () => {
    const message = messageInput.value;
    if (message) {
        const messageDiv = document.createElement('div');
        messageDiv.className = 'message';
        messageDiv.textContent = message;
        chatBox.appendChild(messageDiv);
        messageInput.value = '';
        chatBox.scrollTop = chatBox.scrollHeight; // Auto scroll to the bottom
    }
});
