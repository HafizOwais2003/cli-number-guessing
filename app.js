#! /usr/bin/env node
import inquirer from "inquirer";
// 1)computer will generate a random number
// 2) use input for guessing number
// 3) compare user input with computer generated number and show result
const randomNum = Math.floor(Math.random() * 6 + 1);
const answers = await inquirer.prompt([
    {
        name: "userGuessedNumber",
        type: "number",
        message: "Please guess a number between 1-10: ",
    },
]);
if (answers.userGuessedNumber === randomNum) {
    console.log("congratulations! you guessed right number.");
}
else {
    console.log("You guessed wrong number");
}
