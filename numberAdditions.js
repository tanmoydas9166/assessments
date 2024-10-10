"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.add = add;
function add(numbers) {
    var allNumbers = numbers.split(',').map(function (n) { return Number(n.trim()); });
    return allNumbers.reduce(function (pv, cv) { return pv + cv; }, 0);
}
console.log(add('1,5'));
console.log(add('1'));
console.log(add(''));
