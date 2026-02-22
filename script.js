let input1 = prompt("Enter the first number:");
let input2 = prompt("Enter the second number:");

let num1 = Number(input1);
let num2 = Number(input2);

if (isNaN(num1) || isNaN(num2)) {
    alert("Invalid input. Please enter valid numbers.");
} else {
    alert(`The sum of ${num1} and ${num2} is ${num1 + num2}`);
}