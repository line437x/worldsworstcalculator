"use strict;";

//oprettelse af variabler
const calculate = document.querySelector("#calculate");
const clear = document.querySelector("#clear");
const nr1 = document.querySelector("#firstnumber");
const nr2 = document.querySelector("#secondnumber");
const operator = document.querySelector("#operator");

let resultRead = document.querySelector("#results");
// let firstValue = nr1.value.includes(parseInt);
// let secondValue = nr2.value.includes(parseInt);

let firstValue, secondValue, operatorChoose, result;

window.addEventListener("DOMContentLoaded", setup);
function setup() {
  //Gør knapper klikbarer
  calculate.addEventListener("click", clickCalculate);
  clear.addEventListener("click", clickClear);
  console.log("hej hej");
}

function clickCalculate() {
  //Læs første værdi/input
  firstValue = parseInt(nr1.value);
  console.log(firstValue);
  //Læs anden værdi/input
  secondValue = parseInt(nr2.value);
  console.log(secondValue);

  //Læs operator
  operatorChoose = operator.value;

  //Udregn resultater på baggrund af opreator-input
  switch (operatorChoose) {
    case "add":
      result = firstValue + secondValue;
      break;
    case "sub":
      result = firstValue - secondValue;
      break;
    case "mul":
      result = firstValue * secondValue;
      break;
    case "div":
      result = firstValue / secondValue;
      break;
  }

  //   if (operator.value == "add") {
  //     result = firstValue + secondValue;
  //   } else if (operator.value == "sub") {
  //     result = firstValue - secondValue;
  //   } else if (operator.value == "mul") {
  //     result = firstValue * secondValue;
  //   } else {
  //     result = firstValue / secondValue;
  //   }
  console.log(result);
  //   console.log(operator.value);

  resultRead.textContent = result;
}

function clickClear() {
  console.log("ryd resultatet");
}
