const numbers = [1, 7, 10, 9, 8];
const max = numbers.reduce ((max,n)=> n>max ? max=n:max,numbers[0] );
console.log(max);