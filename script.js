const connectBtn = document.getElementById("connect-btn");
const sendBtn = document.getElementById("send-btn");
const messageInput = document.getElementById("message-input");
const chatBox = document.getElementById("chat-box");

let peer;

// Fungsi untuk memulai koneksi Peer
function initializePeer(initiator) {
  peer = new SimplePeer({ initiator: initiator, trickle: false });

  // Tampilkan signal data di konsol untuk dikirim manual
  peer.on("signal", (data) => {
    console.log("Signal data (copy this): ", JSON.stringify(data));
    alert("Copy the signal data from the console and share it with the other peer!");
  });

  // Terima pesan dari peer lain
  peer.on("data", (data) => {
    appendMessage("left", data.toString());
  });

  // Peer terkoneksi
  peer.on("connect", () => {
    sendBtn.disabled = false;
    console.log("Peer connected!");
  });
}

// Tombol Connect
connectBtn.addEventListener("click", () => {
  const isInitiator = confirm("Are you the first peer (initiator)? Click OK for YES, Cancel for NO.");
  initializePeer(isInitiator);

  // Jika bukan initiator, input signal data manual
  if (!isInitiator) {
    const signalData = prompt("Paste the signal data from the first peer here:");
    if (signalData) {
      peer.signal(JSON.parse(signalData));
    }
  }
});

// Input Signal Manual untuk Initiator
window.addEventListener("paste", (e) => {
  const pastedData = e.clipboardData.getData("text");
  try {
    peer.signal(JSON.parse(pastedData));
    console.log("Signal data applied successfully!");
  } catch (err) {
    console.error("Invalid signal data", err);
  }
});

// Tombol Send Pesan
sendBtn.addEventListener("click", () => {
  const message = messageInput.value.trim();
  if (message && peer) {
    appendMessage("right", message);
    peer.send(message);
    messageInput.value = "";
  }
});

// Tambah Pesan ke Chat Box
function appendMessage(side, message) {
  const chatBubble = document.createElement("div");
  chatBubble.classList.add("chat", side);
  chatBubble.innerHTML = `<p>${message}</p>`;
  chatBox.appendChild(chatBubble);
  chatBox.scrollTop = chatBox.scrollHeight;
}
