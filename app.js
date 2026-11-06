// Initialize the Application Identity Client on Ready
window.onload = function () {
    google.accounts.id.initialize({
        client_id: "YOUR_GOOGLE_CLIENT_ID_HERE.apps.googleusercontent.com", // Add your verified Cloud Console Key Here
        callback: handleSystemAuthentication
    });
    
    google.accounts.id.renderButton(
        document.getElementById("google-btn"),
        { theme: "filled_blue", size: "large", shape: "pill" }
    );
}

// Handle Authentication and Core Framework Activation
function handleSystemAuthentication(authResponse) {
    const accountPayload = parseTokenData(authResponse.credential);

    // Fade out and secure the authentication overlay gate
    document.getElementById("login-overlay").classList.add("hidden");
    document.getElementById("app-container").classList.remove("hidden");

    // Seamlessly populate verified Google accounts interface values
    document.getElementById("user-name").textContent = accountPayload.name;
    document.getElementById("greet-name").textContent = accountPayload.given_name;
    document.getElementById("user-avatar").src = accountPayload.picture;
}

// Safely unpack Google user JSON credentials 
function parseTokenData(token) {
    const contentBase64 = token.split('.')[1];
    const cleanBase64 = contentBase64.replace(/-/g, '+').replace(/_/g, '/');
    const jsonString = decodeURIComponent(window.atob(cleanBase64).split('').map(function(char) {
        return '%' + ('00' + char.charCodeAt(0).toString(16)).slice(-2);
    }).join(''));
    return JSON.parse(jsonString);
}

// Multi-Tab Platform Routing Engine
function switchTab(targetTabId) {
    // Structural transition for system views
    document.querySelectorAll('.tab-content').forEach(viewPanel => {
        viewPanel.classList.add('hidden-tab');
        viewPanel.classList.remove('active-tab');
    });
    
    const activeTarget = document.getElementById(targetTabId);
    activeTarget.classList.remove('hidden-tab');
    activeTarget.classList.add('active-tab');

    // Update targeted item active selection tracking indicators in sidebar UI
    document.querySelectorAll('.nav-item').forEach(navigationNode => {
        navigationNode.classList.remove('active');
    });
    event.currentTarget.classList.add('active');
}

// Core Interface Color Space Controller
function toggleTheme() {
    const surfaceRoot = document.documentElement;
    const graphicIcon = document.getElementById("theme-icon");
    
    if (surfaceRoot.classList.contains("dark-mode")) {
        surfaceRoot.classList.remove("dark-mode");
        surfaceRoot.classList.add("light-mode");
        graphicIcon.className = "fa-solid fa-sun";
    } else {
        surfaceRoot.classList.remove("light-mode");
        surfaceRoot.classList.add("dark-mode");
        graphicIcon.className = "fa-solid fa-moon";
    }
}

// Simple prompt dispatch execution handling logic
function executePromptSubmission() {
    const entryInput = document.getElementById("chat-input");
    const communicationBox = document.getElementById("chat-output");
    
    if (entryInput.value.trim() !== "") {
        const structuralMsg = document.createElement("div");
        structuralMsg.style.padding = "14px";
        structuralMsg.style.background = "var(--bg-navigation)";
        structuralMsg.style.borderRadius = "12px";
        structuralMsg.style.margin = "12px 0";
        structuralMsg.innerHTML = `<strong>You:</strong> ${entryInput.value}`;
        
        communicationBox.appendChild(structuralMsg);
        entryInput.value = "";
        communicationBox.scrollTop = communicationBox.scrollHeight;
    }
}