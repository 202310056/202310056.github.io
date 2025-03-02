function appendCharacter(char) {
    document.getElementById("display").value += char;
}

function clearDisplay() {
    document.getElementById("display").value = "";
}

function deleteLast() {
    let currentValue = document.getElementById("display").value;
    document.getElementById("display").value = currentValue.slice(0, -1);
}

function calculateResult() {
    try {
        document.getElementById("display").value = eval(document.getElementById("display").value);
    } catch {
        document.getElementById("display").value = "Error";
    }
}