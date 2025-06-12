const inputText = document.getElementById("inputText");
const styledText = document.getElementById("styledText");



// Bold
function applyBold(text) {
    return `<strong>${text}</strong>`;
}

// Italic
function applyItalic(text) {
    return `<em>${text}</em>`;
}

// Underline
function applyUnderline(text) {
    return `<u>${text}</u>`;
}

// Strikethrough
function applyStrikethrough(text) {
    return `<s>${text}</s>`;
}

// Highlight
function applyHighlight(text) {
    return `<mark>${text}</mark>`;
}

// Code
function applyCode(text) {
    return `<code>${text}</code>`;
}

// Superscript
function applySuperscript(text) {
    return `<sup>${text}</sup>`;
}

// Subscript
function applySubscript(text) {
    return `<sub>${text}</sub>`;
}

// Markdown functions
function applyBoldMarkdown(text) {
    return `**${text}**`;
}

function applyItalicMarkdown(text) {
    return `*${text}*`;
}

function applyStrikethroughMarkdown(text) {
    return `~~${text}~~`;
}


inputText.addEventListener("input", () => {
    const inputValue = inputText.value;
    // --- Update HTML Outputs ---
    document.getElementById("outputBold").innerHTML = applyBold(inputValue);
    document.getElementById("outputItalic").innerHTML = applyItalic(inputValue);
    document.getElementById("outputUnderline").innerHTML = applyUnderline(inputValue);
    document.getElementById("outputStrikethrough").innerHTML = applyStrikethrough(inputValue);
    document.getElementById("outputHighlight").innerHTML = applyHighlight(inputValue);
    document.getElementById("outputCode").innerHTML = applyCode(inputValue);
    document.getElementById("outputSuperscript").innerHTML = applySuperscript(inputValue);
    document.getElementById("outputSubscript").innerHTML = applySubscript(inputValue);
    // --- Update Markdown Outputs ---
    const outputBoldMarkdown = document.getElementById("outputBoldMarkdown");
    const outputItalicMarkdown = document.getElementById("outputItalicMarkdown");
    const outputStrikethroughMarkdown = document.getElementById("outputStrikethroughMarkdown");

    if (inputValue) { // Only apply markdown if there's actual input
        outputBoldMarkdown.textContent = applyBoldMarkdown(inputValue);
        outputItalicMarkdown.textContent = applyItalicMarkdown(inputValue);
        outputStrikethroughMarkdown.textContent = applyStrikethroughMarkdown(inputValue);
    } else { // Otherwise, clear the markdown outputs
        outputBoldMarkdown.textContent = "";
        outputItalicMarkdown.textContent = "";
        outputStrikethroughMarkdown.textContent = "";
    }
});

// Function to copy text to clipboard
async function copyToClipboard(elementId, copyType) {
    const element = document.getElementById(elementId);
    if (!element) {
        console.error("Element not found:", elementId);
        return;
    }

    // Determine the type of text to copy
     let textToCopy;
    if (copyType === "markdown") {
        textToCopy = element.textContent;
    } else { // default to html
        textToCopy = element.innerHTML;
    }

    try {
        await navigator.clipboard.writeText(textToCopy);
        console.log('Text copied to clipboard:', textToCopy);
        // Optionally, you can show a success message or change the button text
    } catch (err) {
        console.error('Failed to copy text:', err);
        // Fallback for older browsers or if permission is denied
        alert('Failed to copy text. Please copy manually: ' + textToCopy);
    }
}

// Add event listeners to all copy buttons
document.querySelectorAll('.copy-button').forEach(button => {
    button.addEventListener('click', () => {
        const targetId = button.dataset.target; // Get the ID from the data-target attribute
        const copyType = button.dataset.copyType;
        copyToClipboard(targetId, copyType);
    });
});