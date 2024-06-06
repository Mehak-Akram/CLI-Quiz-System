#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
console.log(chalk.bold.cyanBright("\n\t\t WELCOME TO MEHAK-AKRAM PROJECT - QUIZ SYSTEM \t\t\n"));
const quiz = await inquirer.prompt([
    {
        name: "question_1",
        type: "list",
        message: chalk.green("What does npm stand for?"),
        choices: ["Node Project Manager", "Node Packege Manager", "Node Programming Module", "Node Packege Module"],
    },
    {
        name: "question_2",
        type: "list",
        message: chalk.green("What are template literals in TypeScript primilary used for?"),
        choices: ["Declaring variable with constant values", "Concanitating strings", "Defining multi-line strings", "Declaring object literals"],
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
        message: chalk.green("What is the file extension for javascript file?"),
        choices: [".ts", ".js", ".txt", ".html"],
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
    case "Node Packege Manager":
        console.log(chalk.bold.magenta("1.correct"));
        ++score;
        break;
    default:
        console.log(chalk.bold.red("1.Incorrect"));
}
console.log("-".repeat(60));
switch (quiz.question_2) {
    case "Defining multi-line strings":
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
    case ".js":
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
