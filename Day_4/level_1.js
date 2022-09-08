// let inputAge = parseInt(prompt('Enter your age'));
// let output = alert(`${inputAge >= 18 ? `You are old enough to drive` : `You are left with ${18 - inputAge} years to drive`}`);


// let yourAge = parseInt(prompt('Enter your age'));
// let myAge = 24;
// let whoIsOlder = '';
// if(yourAge > myAge) {
//     whoIsOlder = `You are ${yourAge - myAge} years older than me`;
// } else if(myAge > yourAge) {
//     whoIsOlder = `I am ${myAge - yourAge} years older than you`; 
// }else {
//     whoIsOlder = 'We are of same age';
// };
// console.log(whoIsOlder)


let a = 4;
let b = 3;
let option_1 = '';
let option_2 = a > b? `${a} is greater than ${b}`: `${a} is less than ${b}`;
if(a > b){
    option_1 = `${a} is greater than ${b}`
} else {
    option_1 = `${a} is less than ${b}`
};
console.log(option_1)
console.log(option_2)


let number = parseInt(prompt('Enter a number'));
let answer = '';
if(number % 2 == 0) {
    answer = `${number} is an even number`
}else {
    answer = `${number} is an odd number`
};
console.log(answer)



