let currentChat = null;
let chatHistory = {}; // Store chat history for each volunteer
let recording = false;
let startTime, timerInterval;
let mediaRecorder;
let audioChunks = [];

function toggleMenu() {
    var menu = document.getElementById("menu");
    menu.style.display = menu.style.display === "block" ? "none" : "block";
}

function openChat(volunteerName) {
    currentChat = volunteerName;
    document.getElementById("chat-header").innerText = volunteerName;

    // Enable input and buttons
    document.getElementById("message").disabled = false;
    document.getElementById("send-btn").disabled = false;
    document.getElementById("type-btn").disabled = false;
    document.getElementById("voice-btn").disabled = false;

    // Reset UI to text mode initially
    document.getElementById("text-chat").style.display = "flex";
    document.getElementById("voice-chat").style.display = "none";
    document.getElementById("voice-controls").style.display = "none";

    // Load previous chat history if available
    const chatBox = document.getElementById("chat-box");
    chatBox.innerHTML = chatHistory[volunteerName] || "";
}

function sendMessage() {
    const messageInput = document.getElementById("message");
    const messageText = messageInput.value.trim();
    
    if (messageText === "" || !currentChat) return;

    const chatBox = document.getElementById("chat-box");

    // Create message bubble
    const messageBubble = document.createElement("div");
    messageBubble.classList.add("message", "sent");
    messageBubble.innerText = messageText;
    chatBox.appendChild(messageBubble);

    // Save to history
    chatHistory[currentChat] = chatBox.innerHTML;

    // Clear input field
    messageInput.value = "";

    // Auto-scroll to the latest message
    chatBox.scrollTop = chatBox.scrollHeight;

    
}
document.getElementById("message").addEventListener("keydown", function (event) {
    if (event.key === "Enter" && !event.shiftKey) {
        event.preventDefault(); // Prevents new line
        sendMessage();
    }
});


function enableTyping() {
    document.getElementById("text-chat").style.display = "flex";
    document.getElementById("voice-chat").style.display = "none";
    document.getElementById("voice-controls").style.display = "none";
    document.getElementById("message").focus();
}

function startVoiceChat() {
    document.getElementById("text-chat").style.display = "none"; // Hide text input
    document.getElementById("voice-chat").style.display = "flex"; // Show voice input
    document.getElementById("voice-controls").style.display = "none"; // Hide controls initially
    document.getElementById("timer").innerText = "00:00"; // Reset timer
}

function toggleRecording() {
    if (!recording) {
        startRecording();
    } else {
        stopRecording();
    }
}

async function startRecording() {
    try {
        const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
        mediaRecorder = new MediaRecorder(stream);
        audioChunks = [];

        mediaRecorder.ondataavailable = event => {
            audioChunks.push(event.data);
        };

        mediaRecorder.onstop = () => {
            const audioBlob = new Blob(audioChunks, { type: "audio/mp3" });
            const audioUrl = URL.createObjectURL(audioBlob);
            saveVoiceMessage(audioUrl);
        };

        mediaRecorder.start();
        recording = true;
        document.getElementById("mic-btn").innerText = "⏹️"; // Change to stop button

        // Start the timer
        startTime = Date.now();
        timerInterval = setInterval(updateTimer, 1000);
    } catch (error) {
        console.error("Error accessing microphone:", error);
    }
}

function updateTimer() {
    let elapsedTime = Math.floor((Date.now() - startTime) / 1000);
    let minutes = Math.floor(elapsedTime / 60);
    let seconds = elapsedTime % 60;
    document.getElementById("timer").innerText = `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
}

function stopRecording() {
    if (mediaRecorder && recording) {
        mediaRecorder.stop();
        clearInterval(timerInterval);
        recording = false;
        document.getElementById("mic-btn").innerText = "🎤"; // Reset to mic button

        // Show voice message controls
        document.getElementById("voice-controls").style.display = "flex";
    }
}

function saveVoiceMessage(audioUrl) {
    if (!currentChat) return;

    const chatBox = document.getElementById("chat-box");

    // Create a voice message bubble with actual recorded audio
    const voiceBubble = document.createElement("div");
    voiceBubble.classList.add("message", "voice");
    voiceBubble.innerHTML = `
        🎤 Voice message (${document.getElementById("timer").innerText})
        <audio controls>
            <source src="${audioUrl}" type="audio/mp3">
            Your browser does not support the audio element.
        </audio>
    `;
    chatBox.appendChild(voiceBubble);

    // Save to history
    chatHistory[currentChat] = chatBox.innerHTML;

    // Reset UI
    document.getElementById("voice-chat").style.display = "none";
    document.getElementById("voice-controls").style.display = "none";
    document.getElementById("text-chat").style.display = "flex"; // Show text input again
}

function cancelVoiceMessage() {
    document.getElementById("voice-controls").style.display = "none";
    document.getElementById("voice-chat").style.display = "none";
    document.getElementById("text-chat").style.display = "flex"; // Show text input again
}

function navigate(page) {
    window.location.href = page;
}
