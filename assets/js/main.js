let display = document.getElementById('display');
let currentInput = '0';
let shouldResetDisplay = false;

function updateDisplay(value) {
    display.value = value;
}

function appenValue(value) {
    if (shouldResetDisplay) {
        currentInput = '';
        shouldResetDisplay = false;
    }

    if (currentInput === '0' && value !== '.') {
        currentInput = value;
    } else {
        currentInput += value;
    }

    updateDisplay(currentInput);
}

function clearDisplay() {
    currentInput = '0';
    shouldResetDisplay = false;
    updateDisplay(currentInput);
}

function calculate() {
    try {
        let result = eval(currentInput);

        if (!isFinite(result)) {
            updateDisplay('Error');
            currentInput = '0';
        } else {
            currentInput = String(parseFloat(result.toFixed(10)));
            updateDisplay(currentInput);
        }
    } catch (e) {
        updateDisplay('Error');
        currentInput = '0';
    }

    shouldResetDisplay = true;
}

function toggleSign() {
    if (currentInput !== '0') {
        if (currentInput.startsWith('-')) {
            currentInput = currentInput.slice(1);
        } else {
            currentInput = '-' + currentInput;
        }
        updateDisplay(currentInput);
    }
}