"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.add = add;
function add(numbers) {
    var delimeter = ',';
    if (numbers.substring(0, 2) === '//') {
        delimeter = numbers[2];
        numbers = numbers.substring(3);
    }
    var regex = new RegExp("[\n".concat(delimeter, "]"));
    var allNumbers = numbers.split(regex).map(function (n) { return Number(n.trim()); });
    return allNumbers.reduce(function (pv, cv) { return pv + cv; }, 0);
}
console.log(add('1,5'));
console.log(add('1'));
console.log(add(''));
console.log(add('1\n2,3'));
console.log(add('//+\n1+2'));
