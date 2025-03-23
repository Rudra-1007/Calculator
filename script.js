document.addEventListener("keydown", function(event) {
    const key = event.key;
    if (!isNaN(key) || ['+', '-', '*', '/', '.', 'Enter', 'Backspace', 'Escape'].includes(key)) {
        handleKeyPress(key);
    }
});

function handleKeyPress(key) {
    if (!isNaN(key) || ['+', '-', '*', '/', '.'].includes(key)) {
        appendToDisplay(key);
    } else if (key === "Enter") {
        calculateResult();
    } else if (key === "Backspace") {
        deleteLast();
    } else if (key === "Escape") {
        clearDisplay();
    }
}

function appendToDisplay(value) {
    const display = document.getElementById("display");
    if (display.innerText === "0") {
        display.innerText = value;
    } else {
        display.innerText += value;
    }
    animateButton(value);
}

function clearDisplay() {
    document.getElementById("display").innerText = "0";
}

function deleteLast() {
    const display = document.getElementById("display");
    display.innerText = display.innerText.slice(0, -1);
    if (display.innerText === "") {
        display.innerText = "0";
    }
}

function calculateResult() {
    const display = document.getElementById("display");
    try {
        display.innerText = eval(display.innerText);
        highlightDisplay();
    } catch {
        display.innerText = "Error";
    }
}

function calculateSqrt() {
    const display = document.getElementById("display");
    display.innerText = Math.sqrt(parseFloat(display.innerText)).toFixed(5);
    highlightDisplay();
}

function calculatePower() {
    const display = document.getElementById("display");
    const values = display.innerText.split("^");
    if (values.length === 2) {
        display.innerText = Math.pow(parseFloat(values[0]), parseFloat(values[1])).toFixed(5);
    } else {
        display.innerText += "^";
    }
}

function calculateTrig(func) {
    const display = document.getElementById("display");
    const value = parseFloat(display.innerText) * (Math.PI / 180);
    let result = 0;
    if (func === 'sin') result = Math.sin(value);
    if (func === 'cos') result = Math.cos(value);
    if (func === 'tan') result = Math.tan(value);
    display.innerText = result.toFixed(5);
    highlightDisplay();
}

function calculateLog() {
    const display = document.getElementById("display");
    display.innerText = Math.log10(parseFloat(display.innerText)).toFixed(5);
    highlightDisplay();
}

function highlightDisplay() {
    const display = document.getElementById("display");
    display.style.transition = "background 0.3s ease-in-out, color 0.3s ease-in-out";
    display.style.background = "#0f0";
    display.style.color = "#000";
    setTimeout(() => {
        display.style.background = "#000";
        display.style.color = "#0f0";
    }, 300);
}

function animateButton(value) {
    const buttons = document.querySelectorAll("button");
    buttons.forEach(button => {
        if (button.innerText === value) {
            button.style.transform = "scale(0.9)";
            setTimeout(() => {
                button.style.transform = "scale(1)";
            }, 150);
        }
    });
}