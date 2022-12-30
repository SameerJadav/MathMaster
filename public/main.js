import "./style.css";

let display = document.getElementById("display");
const calculator = document.getElementById("calculator");
const equals = document.getElementById("equals");
const reset = document.getElementById("reset");
const del = document.getElementById("del");
const numbers = document.querySelectorAll(".number");
const operators = document.querySelectorAll(".operator");

calculator.addEventListener("click", (event) => {
  event.preventDefault();
});

// Loop through the number buttons and add a click event listener to each one
numbers.forEach((number) => {
  number.addEventListener("click", () => {
    display.value += number.value;
  });
});

// Loop through the operator buttons and add a click event listener to each one
operators.forEach((operator) => {
  operator.addEventListener("click", () => {
    display.value += operator.value;
  });
});

equals.addEventListener("click", () => {
  // Use the eval function to calculate the result of the equation
  display.value = eval(display.value);
});

// Reset the display
reset.addEventListener("click", () => {
  display.value = "";
});

del.addEventListener("click", () => {
  // Remove the last character from the display value
  display.value = display.value.slice(0, -1);
});
