function addToDisplay(value) {
    document.getElementById('display').value += value;
}

function calculate() {
    try {
        var result = eval(document.getElementById('display').value);
        document.getElementById('result').innerHTML = "Resultado: " + result;
    } catch (error) {
        document.getElementById('result').innerHTML = "Erro";
    }
}

function clearDisplay() {
    document.getElementById('display').value = '';
    document.getElementById('result').innerHTML = '';
}
