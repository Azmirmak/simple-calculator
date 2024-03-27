#! /usr/bin/env node
// above line is called 'shebang'
import inquirer from "inquirer";
const answer = await inquirer.prompt([
    { message: "Enter first number: ", type: "number", name: "firstNumber" },
    { message: "Enter second number: ", type: "number", name: "secondNumber" },
    {
        message: "Choose the given operators to proceed: ",
        type: "list",
        name: "operator",
        choices: ["Addition", "Subtraction", "Multiplication", "Division", "Remainder"],
    },
]);
if (answer.operator === "Addition") {
    console.log(answer.firstNumber + answer.secondNumber);
}
else if (answer.operator === "Subtraction") {
    console.log(answer.firstNumber - answer.secondNumber);
}
else if (answer.operator === "Multiplication") {
    console.log(answer.firstNumber * answer.secondNumber);
}
else if (answer.operator === "Division") {
    console.log(answer.firstNumber / answer.secondNumber);
}
else if (answer.operator === "Remainder") {
    console.log(answer.firstNumber % answer.secondNumber);
}
else {
    console.log("please choose valid operator");
}
