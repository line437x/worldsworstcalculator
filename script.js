"use strict";

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
  // console.log("hej hej");
}

function clickCalculate() {
  //Læs første værdi/input
  firstValue = Number(nr1.value);
  // console.log(firstValue);

  //Læs anden værdi/input
  secondValue = Number(nr2.value);
  // console.log(secondValue);

  //Læs operator
  operatorChoose = operator.value;
  console.log(operator.value);

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

  let numberOfDecimals = document.querySelector("#decimals").value;
  // console.log(document.querySelector("#doround").checked);

  if (document.querySelector("#doround").checked) {
    numberOfDecimals = document.querySelector("#decimals").value;
  } else {
    numberOfDecimals = 0;
  }

  //Erstat første input med resultat
  document.querySelector("#firstnumber").value = result;

  let appendToList = document.createElement("li");
  //Vis resultat i listen
  appendToList.textContent = result.toFixed(numberOfDecimals);

  let ulResults = document.querySelector("#results");
  ulResults.appendChild(appendToList);
  ulResults.scrollTop = ulResults.scrollHeight;
}

function clickClear() {
  //Ryd resulatet
  resultRead.textContent = "";
}
