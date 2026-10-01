let num1 = 0;
let num2 = 0;
let flag = false;
let op = "";
let memory = 0;
let lastNum2 = 0;
let lastOp = "";
let justCalculated = false;

function getValue() {

let a;
let b;
let sum;

let value = event.target.value;

// NUMBERS
if (
    value != "+" &&
    value != "-" &&
    value != "/" &&
    value != "*" &&
    value != "%" &&
    value != "clear" &&
    value != "=" &&
    flag == false
) {

    // Decimal handling
    if (value == "." && document.getElementById("i").value.includes(".")) {
        return;
    }

    if (justCalculated == true && value != ".") {
        document.getElementById("i").value = "";
        num1 = 0;
        justCalculated = false;
    }

    a = document.getElementById("i").value =
        document.getElementById("i").value + value;

    num1 = Number(a);
}

// OPERATOR
else if (
    value == "+" ||
    value == "-" ||
    value == "/" ||
    value == "*" ||
    value == "%"
) {

    // If operator is pressed after another calculation
    if (justCalculated == true) {
        flag = true;
        op = value;
        justCalculated = false;
        document.getElementById("i").value = "";
        return;
    }

    // Don't allow operator without number
    if (document.getElementById("i").value == "") {
        return;
    }

    flag = true;
    op = value;

    document.getElementById("i").value = "";
}

// SECOND NUMBER
else if (
    value != "+" &&
    value != "-" &&
    value != "/" &&
    value != "*" &&
    value != "%" &&
    value != "clear" &&
    value != "=" &&
    flag == true
) {

    if (value == "." && document.getElementById("i").value.includes(".")) {
        return;
    }

    b = document.getElementById("i").value =
        document.getElementById("i").value + value;

    num2 = Number(b);
}

// EQUAL
else if (value == "=") {

    // Repeated =
    if (document.getElementById("i").value == "" && lastOp != "") {
        num2 = lastNum2;
        op = lastOp;
    }

    // Addition
    if (op == "+") {

        sum = num1 + num2;
        num1 = sum;

        document.getElementById("i").value = sum;
    }

    // Subtraction
    else if (op == "-") {

        let dif = num1 - num2;

        num1 = dif;

        document.getElementById("i").value = dif;
    }

    // Multiplication
    else if (op == "*") {

        let prod = num1 * num2;

        num1 = prod;

        document.getElementById("i").value = prod;
    }

    // Division
    else if (op == "/") {

        if (num2 == 0) {

            document.getElementById("i").value =
                "can't divide by zero";

            num1 = 0;
            num2 = 0;
            flag = false;
            op = "";

            return;
        }

        else {

            let div = num1 / num2;

            num1 = div;

            document.getElementById("i").value = div;
        }
    }

    // Modulus
    else if (op == "%") {

        let rem = num1 % num2;

        num1 = rem;

        document.getElementById("i").value = rem;
    }

    lastNum2 = num2;
    lastOp = op;

    flag = false;
    justCalculated = true;
}

// CLEAR
else if (value == "clear") {

    document.getElementById("i").value = "";

    num1 = 0;
    num2 = 0;
    op = "";

    flag = false;

    lastNum2 = 0;
    lastOp = "";

    justCalculated = false;
}


}

// AUTO CALCULATE
function autoCalculate() {

let expression = document.getElementById("i").value;

if (expression == "") {
    return;
}

try {

    // Only allow calculator characters
    if (!/^[0-9+\-*/%.() ]+$/.test(expression)) {
        document.getElementById("i").value = "Error";
        return;
    }

    let result = Function("return " + expression)();

    document.getElementById("i").value = result;

    num1 = Number(result);

    flag = false;
    justCalculated = true;

}
catch {

    document.getElementById("i").value = "Error";

}


}

// MEMORY PLUS
function memoryPlus() {

let value = Number(document.getElementById("i").value);

if (!isNaN(value)) {
    memory = memory + value;
}


}

// MEMORY MINUS
function memoryMinus() {

let value = Number(document.getElementById("i").value);

if (!isNaN(value)) {
    memory = memory - value;
}


}

// MEMORY RECALL
function memoryRecall() {

document.getElementById("i").value = memory;

num1 = memory;

flag = false;
justCalculated = true;


}

// KEYBOARD SUPPORT
document.addEventListener("keydown", function (event) {

let key = event.key;

if (
    (key >= "0" && key <= "9") ||
    key == "." ||
    key == "+" ||
    key == "-" ||
    key == "*" ||
    key == "/" ||
    key == "%"
) {

    let button = document.querySelector(
        `button[value="${key}"]`
    );

    if (button) {
        button.click();
    }
}

else if (key == "Enter" || key == "=") {

    document.getElementById("=").click();
}

else if (key == "Escape") {

    document.getElementById("c").click();
}


});