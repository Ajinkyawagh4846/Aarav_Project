// Sidebar navigation switcher
function switchTab(targetTabId, evt) {
    document.querySelectorAll('.tab-content').forEach(panel => {
        panel.classList.add('hidden-tab');
        panel.classList.remove('active-tab');
    });
    
    const target = document.getElementById(targetTabId);
    if (target) {
        target.classList.remove('hidden-tab');
        target.classList.add('active-tab');
    }

    document.querySelectorAll('.nav-item').forEach(item => {
        item.classList.remove('active');
    });

    if (evt && evt.currentTarget) {
        evt.currentTarget.classList.add('active');
    }
}

// Dark/Light theme toggle
function toggleTheme() {
    const root = document.documentElement;
    const themeIcon = document.getElementById("theme-icon");
    
    if (root.classList.contains("dark-mode")) {
        root.classList.remove("dark-mode");
        root.classList.add("light-mode");
        if (themeIcon) themeIcon.className = "fa-solid fa-sun";
    } else {
        root.classList.remove("light-mode");
        root.classList.add("dark-mode");
        if (themeIcon) themeIcon.className = "fa-solid fa-moon";
    }
}

// Keypress listener for prompt entry
function handleKeyPress(event) {
    if (event.key === 'Enter') {
        executePromptSubmission();
    }
}

// Send user prompts into Omni Chat
function executePromptSubmission() {
    const input = document.getElementById("chat-input");
    const output = document.getElementById("chat-output");
    
    if (input && output && input.value.trim() !== "") {
        const userMsg = document.createElement("div");
        userMsg.style.padding = "14px";
        userMsg.style.background = "var(--bg-navigation)";
        userMsg.style.borderRadius = "12px";
        userMsg.style.margin = "12px 0";
        userMsg.style.border = "1px solid var(--border-ui)";
        userMsg.innerHTML = `<strong>You:</strong> ${input.value}`;
        
        output.appendChild(userMsg);
        input.value = "";
        output.scrollTop = output.scrollHeight;
    }
}