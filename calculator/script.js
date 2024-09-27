const display = document.getElementById("display");

function toDisplay(input) {
    if (input === "+/-") {
        if (display.value[0] === '-') {
            display.value = display.value.slice(1);
        } else {
            display.value = '-' + display.value;
        }
    } else {
        display.value += input;
    }
}

function clearDisplay() {
    display.value = "";
}

function calculate() {
    try {
        display.value = eval(display.value);
    } catch (e) {
        display.value = "Error";
    }
}

function toggleParentheses() {
    display.value += display.value.includes('(') ? ')' : '(';
}
