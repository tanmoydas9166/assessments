export function add(numbers: string) {
    let delimeter = ',';
    if (numbers.substring(0, 2) === '//') {
        delimeter = numbers[2];
        numbers = numbers.substring(3)
    }
    const regex = new RegExp(`[\n${delimeter}]`)
    const allNumbers = numbers.split(regex).map(n => Number(n.trim()));
    let sum = 0;
    const negativeNumbers: number[] = [];
    allNumbers.forEach((num) => {
        if (num < 0) negativeNumbers.push(num);
        else sum += num;
    })
    if (negativeNumbers.length) {
        const errorMessage = 'negative numbers not allowed ' + negativeNumbers.join(',');
        throw new Error(errorMessage)
    }
    return sum;
}

console.log(add('1,5'))
console.log(add('1'))
console.log(add(''))
console.log(add('1\n2,3'))
console.log(add('//+\n1+2'))
console.log(add('1,5,-2,-4,2,-6'))
