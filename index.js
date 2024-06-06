#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
console.log(chalk.bold.cyanBright("\n\t\t WELCOME TO MEHAK-AKRAM PROJECT - QUIZ SYSTEM \t\t\n"));
const quiz = await inquirer.prompt([
    {
        name: "question_1",
        type: "list",
        message: chalk.green("What is the correct way to check if two values are not equal in Typescript?"),
        choices: ["a == b", "a === b", "a = b", "a !== b"],
    },
    {
        name: "question_2",
        type: "list",
        message: chalk.green("Which of the following characters is commonly allowed in variable names in Typescript?"),
        choices: ["$", "@", "#", "&"],
    },
    {
        name: "question_3",
        type: "list",
        message: chalk.green("Which operator is commonly used of string concentration in Typescript?"),
        choices: ["+", "-", "*", "/"],
    },
    {
        name: "question_4",
        type: "list",
        message: chalk.green("In Typescript which symbol is commonly used to terminate a statement?"),
        choices: [".", ":", ";", ","],
    },
    {
        name: "question_5",
        type: "list",
        message: chalk.green("Which method of inquirer.js is used to start the prompt interface and recieve the input"),
        choices: ["start()", "prompt()", "init()", "run()"],
    },
]);
let score = 0;
switch (quiz.question_1) {
    case "a !== b":
        console.log(chalk.bold.magenta("1.correct"));
        ++score;
        break;
    default:
        console.log(chalk.bold.red("1.Incorrect"));
}
console.log("-".repeat(60));
switch (quiz.question_2) {
    case "$":
        console.log(chalk.bold.magenta("2.correct"));
        ++score;
        break;
    default:
        console.log(chalk.bold.red("2.Incorrect"));
}
console.log("-".repeat(60));
switch (quiz.question_3) {
    case "+":
        console.log(chalk.bold.magenta("3.correct"));
        ++score;
        break;
    default:
        console.log(chalk.bold.red("3 . i=Incorrect"));
}
console.log("-".repeat(60));
switch (quiz.question_4) {
    case ";":
        console.log(chalk.bold.magenta("4.correct"));
        ++score;
        break;
    default:
        console.log(chalk.bold.red("4.Incorrect"));
}
console.log("-".repeat(60));
switch (quiz.question_5) {
    case "prompt()":
        console.log(chalk.bold.magenta("5.correct"));
        ++score;
        break;
    default:
        console.log(chalk.bold.red("5.Incorrect"));
}
console.log("-".repeat(60));
console.log(chalk.bold.yellow(`score: ${score}`));
