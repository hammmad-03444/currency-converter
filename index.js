#! /use/bin/env node
import inquirer from "inquirer";
let baseCurrency = {
    USD: 1,
    PKR: 278,
    EUR: 0.91,
    INR: 74.57,
    SAR: 3.75,
    OMR: 0.38,
    GBP: 0.76,
    AFN: 71.23,
};
let questions = await inquirer.prompt([{
        name: "fromCurrency",
        message: "Select your from currency",
        type: "list",
        choices: ['USD', 'PKR', 'EUR', 'INR', 'SAR', 'OMR', 'GBP', 'AFN']
    },
    {
        name: "toCurrency",
        message: "Select your to currency  ",
        type: "list",
        choices: ['USD', 'PKR', 'EUR', 'INR', 'SAR', 'OMR', 'GBP', 'AFN']
    },
    { name: "Amount",
        message: "Enter your amount please",
        type: "number"
    }]);
let fromAmount = baseCurrency[questions.fromCurrency];
let toAmount = baseCurrency[questions.toCurrency];
let amount = questions.Amount;
let baseAmount = amount / fromAmount;
let convertedAmount = baseAmount * toAmount;
console.log(`your converted amount is here ${convertedAmount}`);
