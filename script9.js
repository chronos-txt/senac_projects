numButtons = document.querySelectorAll(".btn");

let result = '';
let num1 = '';
let num2 = '';
let operator = null;
let numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
let operators = ['+', '-', '/', '*'];

numButtons.forEach(button => {
    button.addEventListener("click", (event) => {
        let buttonValue = event.target.dataset.value;
        let currentValue;

        if (operators.includes(buttonValue)) {
            operator = buttonValue;
            update();
        } else if (numbers.includes(parseInt(buttonValue))) {
            if (!operator) {
                currentValue = buttonValue;
                num1 += buttonValue;
            } else {
                num2 += buttonValue;
                console.log("Num2" + num2);
            }
            console.log(num1, num2);
            update();
        } else if (buttonValue == 'clear') {
            num1 = '';
            num2 = '';
            operator = null;
            result = ''; // Resetar o resultado
            update();
        } else if (buttonValue == 'equals') {
            if (num1 && num2 && operator) {
                result = calculate(parseFloat(num1), parseFloat(num2), operator);
                showResult();
                
            }
        }
    });
});

function calculate(num1, num2, operator) {
    switch (operator) {
        case '+':
            return num1 + num2;
        case '-':
            return num1 - num2;
        case '*':
            return num1 * num2;
        case '/':
            return num2 !== 0 ? num1 / num2 : "Erro: Divisão por zero";
        default:
            return "Operador inválido";
    }
}

function update() { // Errado, conserte
    let display = document.getElementById("display");
    
    if (num2 !== '') {
        display.value = num1 + ' ' + operator + ' ' + num2;
    } else if (operator) {
        display.value = num1 + ' ' + operator;
    } else if (result != '') {
        display.value = result;
    } else {
        display.value = num1;
    }
}

function showResult() { // Gambiarra
    display.value = result
}
