export function add(numbers: string) {
    const allNumbers = numbers.split(/[\n,]/).map(n => Number(n.trim()));
    return allNumbers.reduce((pv, cv) => pv+cv, 0)
}

console.log(add('1,5'))
console.log(add('1'))
console.log(add(''))
console.log(add('1\n2,3'))