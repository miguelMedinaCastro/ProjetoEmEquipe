const calculadora = prompt("Qual vai ser a operação que você vai realizar hoje?\n 1- Adição +\n 2- Subtração -\n 3- Multiplicação *\n 4- Divisão /\n 5- Divisão real %\n 6- Potenciação **")
let resultado;
let num1 = parseflaot(document.getElementById("num1").value);
let num2 = Number(prompt("digite outro número"))

function Adicao () {
    resultado = num1 + num2;
    alert(`${num1} + ${num2} = ${resultado}`)
}
function Subtracao () {
    resultado = num1 - num2;
    alert(`${num1} - ${num2} = ${resultado}`)
}

if (calculadora == 1) {
    Adicao()
} else if (calculadora == 2 ){
    Subtracao ()
}