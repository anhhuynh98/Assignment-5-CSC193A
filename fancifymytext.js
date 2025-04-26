// Initial test
function makeTextBigger() {
    alert("Hello, world!");
    document.getElementById("userText").style.fontSize = "24pt";
}

function applyStyle() {
    const textArea = document.getElementById("userText");
    const isFancy = document.getElementById("fancy").checked;

    if (isFancy) {
        textArea.style.fontWeight = "bold";
        textArea.style.color = "blue";
        textArea.style.textDecoration = "underline";
    } else {
        textArea.style.fontWeight = "normal";
        textArea.style.color = "black";
        textArea.style.textDecoration = "none";
    }
}

function mooText() {
    const textArea = document.getElementById("userText");
    let text = textArea.value.toUpperCase();
    let sentences = text.split(".");
    sentences = sentences.map(sentence => {
        let words = sentence.trim().split(" ");
        if (words.length > 0 && words[words.length - 1] !== "") {
            words[words.length - 1] += "-Moo";
        }
        return words.join(" ");
    });
    textArea.value = sentences.join(". ");
}
