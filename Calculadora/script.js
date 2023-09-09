let resultado;
let num1 = parsefloat(document.getElementById("num1").value);
let num2 = parseFloat(document.getElementById("num2").value);

function Adicao () {
    resultado = num1 + num2;
    alert(`${resultado}`)
}
function Subtracao () {
    resultado = num1 - num2;
}
function Multiplicao () {
    resultado = num1 * num2;
}
function Divisao () {
    resultado = num1 / num2;
}
function  Restodadivisao () {
    resultado = num1 / num2;
}
function Potenciacao () {
    resultado = num1 ** num2;
}
