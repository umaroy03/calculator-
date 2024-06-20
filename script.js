// script.js

// Function to clear the display
function clearDisplay() {
    document.getElementById('display').value = '';
}

// Function to append a character to the display
function appendToDisplay(char) {
    document.getElementById('display').value += char;
}

// Function to calculate the result
function calculateResult() {
    const display = document.getElementById('display');
    try {
        display.value = eval(display.value);
    } catch (e) {
        display.value = 'Error';
    }
}
