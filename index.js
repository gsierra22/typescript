"use strict";
exports.__esModule = true;
var readline_sync_1 = require("readline-sync"); // imports question method
function main() {
    function isNumber(str) {
        var Num = parseInt(str);
        var isNum = !isNaN(Num);
        return isNum;
    }
    function isOperator(operator) {
        switch (operator) {
            case '+':
            case '-':
            case '*':
            case '/':
                return true;
            default:
                return false;
        }
    }
    var firstString = (0, readline_sync_1.question)('Enter first number:\n');
    var operator = (0, readline_sync_1.question)('Enter operator: \n');
    var secondString = (0, readline_sync_1.question)('Enter second number\n');
    var validInput = isNumber(firstString) && isOperator(operator) && isNumber(secondString);
    function calculate(firstNum, operator, secondtNum) {
        switch (operator) {
            case '+':
                return firstNum + secondtNum;
            case '-':
                return firstNum - secondtNum;
            case '*':
                return firstNum * secondtNum;
            case '/':
                return firstNum / secondtNum;
        }
    }
    if (validInput) {
        var firstNum = parseInt(firstString);
        var secondtNum = parseInt(secondString);
        var result = calculate(firstNum, operator, secondtNum);
        console.log(result);
    }
    else {
        console.log('\ninvalid input\n');
    }
}
main();
