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
    const inputValue = inputText.value;
     document.getElementById("outputBold").innerHTML = applyBold(inputValue);
    document.getElementById("outputItalic").innerHTML = applyItalic(inputValue);
    document.getElementById("outputUnderline").innerHTML = applyUnderline(inputValue);
    document.getElementById("outputStrikethrough").innerHTML = applyStrikethrough(inputValue);
    document.getElementById("outputHighlight").innerHTML = applyHighlight(inputValue);
    document.getElementById("outputCode").innerHTML = applyCode(inputValue);
    document.getElementById("outputSuperscript").innerHTML = applySuperscript(inputValue);
    document.getElementById("outputSubscript").innerHTML = applySubscript(inputValue);
});