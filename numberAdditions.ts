export function add(numbers: string) {
    let delimeter = ',';
    if (numbers.substring(0, 2) === '//') {
        delimeter = numbers[2];
        numbers = numbers.substring(3)
    }
    const regex = new RegExp(`[\n${delimeter}]`)
    const allNumbers = numbers.split(regex).map(n => Number(n.trim()));
    return allNumbers.reduce((pv, cv) => pv+cv, 0)
}

console.log(add('1,5'))
console.log(add('1'))
console.log(add(''))
console.log(add('1\n2,3'))
console.log(add('//+\n1+2'))
