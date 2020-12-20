//global vars
var number1 = true;
var number2 = false;
var operator = false;

//getting elements
var number = document.getElementsByClassName("buttonNum");
var op = document.getElementsByClassName("operator");
var equal = document.getElementsByClassName("equals");
var clear = document.getElementsByClassName("buttonClear");
var screen = document.getElementById("screen");

//adding event listeners to buttons
for (var i = 0; i < number.length; i++) {
  number[i].addEventListener("click", function(event){
    screen.innerHTML = this.innerHTML;
    if(number1 === true){
      number1 = parseInt(this.innerHTML);
      operator = true;
    }else if(number2 === true){
      number2 = parseInt(this.innerHTML);
    }
  })
}

for (var i = 0; i < op.length; i++) {
  op[i].addEventListener("click", function(event){
    if(operator === true){
      screen.innerHTML = this.innerHTML;
      operator = this.innerHTML;
      number2 = true;
    }
  })
}

//equals button
equal[0].addEventListener("click", function(){
  var answer = doCalc();
  screen.innerHTML = answer;
})

//Calculations. ".toFixed(x)" converts number into a string while keeping x decimal places
function doCalc(){
  switch (operator) {
    case "+":
    return (number1 + number2).toFixed(2);
      break;
    case "-":
      return (number1 - number2).toFixed(2);
      break;
    case "/":
      return (number1 / number2).toFixed(2);
      break;
    case "*":
      return (number1 * number2).toFixed(2);
      break;
    default:
      return ("Error");
  }
}

//clear button
clear[0].addEventListener("click", function(){
  screen.innerHTML = ""
  number1 = true;
  number2 = false;
  operator = false;
})