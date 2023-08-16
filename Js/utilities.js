function getElementValueById(elementId) {
    const getElement = document.getElementById(elementId);
    const elementValue = getElement.innerText;
    return elementValue;
}

function getInputFieldValueById(inputId) {
    const getInput = document.getElementById(inputId);
    const inputValue = getInput.value;
    return inputValue;
}