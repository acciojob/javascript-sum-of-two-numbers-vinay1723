let input1 = prompt("Enter the first number:");
let input2 = prompt("Enter the second number:");

// Write your code here and print the output using alert function
if (isNaN(input1) || isNaN(input2)) {
	prompt("Invalid input. Please enter a valid number");
	return;
}

console.log(`The sum of ${input1} and ${input2} is ${(+input1) + (+input2)}`)


