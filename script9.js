
numButtons = document.querySelectorAll(".btn")

let num1 = ''
let num2 = ''
let operator = null
let numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
let operators = ['+', '-', '/', '*']

numButtons.forEach(button => {
    button.addEventListener("click", (event) => {
        let buttonValue = event.target.dataset.value;
        
        let currentValue
        
        if ( operators.includes(buttonValue)) {
            operator = buttonValue
            alert("op")
        } else if (numbers.includes(parseInt(buttonValue))){
            
            if (!operator) {
                currentValue = buttonValue
                num1 += buttonValue;
            } else {
                num2 += buttonValue
                console.log("Num2" + num2)
            }
            console.log(num1, num2)

            
        } else if (buttonValue == 'clear') {
            
            num1 = ''
            num2 = ''
            operator = null

        } else if (buttonValue == 'equals') {
            
            if (num1 && num2 && operator) {
                let result = calculate(parseFloat(num1), parseFloat(num2), operator)
                alert(result)
            }
            
            }
        }

    );

    
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

function update() {
    let display = document.getElementById("display");

    display.textContent = num1;

}