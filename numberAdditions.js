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
    var sum = 0;
    var negativeNumbers = [];
    allNumbers.forEach(function (num) {
        if (num < 0)
            negativeNumbers.push(num);
        else
            sum += num;
    });
    if (negativeNumbers.length) {
        var errorMessage = 'negative numbers not allowed ' + negativeNumbers.join(',');
        throw new Error(errorMessage);
    }
    return sum;
}
console.log(add('1,5'));
console.log(add('1'));
console.log(add(''));
console.log(add('1\n2,3'));
console.log(add('//+\n1+2'));
console.log(add('1,5,-2,-4,2,-6'));
