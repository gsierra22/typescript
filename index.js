"use strict";
exports.__esModule = true;
var readline_sync_1 = require("readline-sync"); // imports question method
function main() {
    var firstString = (0, readline_sync_1.question)('Enter first numer:\n');
    console.log(firstString);
}
main();
