let peer;
const chatBox = document.getElementById('chat-box');
const messageInput = document.getElementById('message');
const connectButton = document.getElementById('connect');
const sendButton = document.getElementById('send');

// Generate Peer Connection
connectButton.addEventListener('click', () => {
  peer = new SimplePeer({ initiator: location.hash === '#1', trickle: false });

  peer.on('signal', (data) => {
    console.log('Signal data:', JSON.stringify(data));
    alert('Share this signal data with your peer:\n' + JSON.stringify(data));
  });

  peer.on('connect', () => {
    chatBox.innerHTML += '<div>Connected to peer!</div>';
    sendButton.disabled = false;
  });

  peer.on('data', (data) => {
    chatBox.innerHTML += `<div>Peer: ${data}</div>`;
  });
});

// Send Message
sendButton.addEventListener('click', () => {
  const message = messageInput.value;
  if (message) {
    peer.send(message);
    chatBox.innerHTML += `<div>You: ${message}</div>`;
    messageInput.value = '';
  }
});
