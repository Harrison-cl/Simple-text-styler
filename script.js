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


inputText.addEventListener("input", () => {
    styledText.innerHTML = inputText.value;
    document.getElementById("outputBold").value = applyBold(inputText.value);
    document.getElementById("outputItalic").value = applyItalic(inputText.value);
    document.getElementById("outputUnderline").value = applyUnderline(inputText.value);
    document.getElementById("outputStrikethrough").value = applyStrikethrough(inputText.value);
    document.getElementById("outputHighlight").value = applyHighlight(inputText.value);
    document.getElementById("outputCode").value = applyCode(inputText.value);
    document.getElementById("outputSuperscript").value = applySuperscript(inputText.value);
    document.getElementById("outputSubscript").value = applySubscript(inputText.value);
});