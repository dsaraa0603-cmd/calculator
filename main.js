let firstNumber = "";
let secondNumber = "";
let operator = "";
const display = document.getElementById("display");
function getNumber(num) {
  if (operator === "") {
    if (num === "." && firstNumber.includes(".")) {
      return;
    }
    firstNumber = firstNumber + num;
    display.innerText = firstNumber;
  } else {
    if (num === "." && secondNumber.includes(".")) {
      return;
    }
    secondNumber = secondNumber + num;
    display.innerText = secondNumber;
  }
}
function getOperator(op) {
  if (firstNumber === "") {
    return;
  }
  if (secondNumber !== "") {
    calculate();
  }
  operator = op;
}
function calculate() {
  if (firstNumber === "" || secondNumber === "" || operator === "") {
    return;
  }
  let num1 = Number(firstNumber);
  let num2 = Number(secondNumber);
  let result = 0;
  if (operator === "+") {
    result = num1 + num2;
  } else if (operator === "-") {
    result = num1 - num2;
  } else if (operator === "*") {
    result = num1 * num2;
  } else if (operator === "/") {
    if (num2 === 0) {
      display.innerText = "Алдаа";
      firstNumber = "";
      secondNumber = "";
      operator = "";
      return;
    }
    result = num1 / num2;
  }
  display.innerText = result;
  firstNumber = String(result);
  secondNumber = "";
  operator = "";
}
function clearAll() {
  firstNumber = "";
  secondNumber = "";
  operator = "";
  display.innerText = "0";
}
function deleteLast() {
  if (operator === "") {
    firstNumber = firstNumber.slice(0, -1);
    if (firstNumber === "") {
      display.innerText = "0";
    } else {
      display.innerText = firstNumber;
    }
  } else {
    secondNumber = secondNumber.slice(0, -1);
    if (secondNumber === "") {
      display.innerText = "0";
    } else {
      display.innerText = secondNumber;
    }
  }
}
