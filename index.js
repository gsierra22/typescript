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
    var firstString = (0, readline_sync_1.question)('Enter first numer:\n');
    var operator = (0, readline_sync_1.question)('Enter operator: \n');
    var secondString = (0, readline_sync_1.question)('Enter second numer:\n');
    var validInput = isNumber(firstString) && isOperator(operator) && isNumber(secondString);
    console.log(validInput);
}
main();
