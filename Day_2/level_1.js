let challenge = '30 Days Of JavaScript';

console.log(challenge)

console.log(challenge.length)

console.log(challenge.toUpperCase())

console.log(challenge.toLowerCase())

console.log(challenge.substring(3, 7))

console.log(challenge.substring(3, 21))

console.log(challenge.includes('Script'))

console.log(challenge.split())

console.log(challenge.split(' '))

let string = 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon';
console.log(string.split(','))

console.log(challenge.replace('JavaScript', 'Python'))

console.log(challenge.charAt(15))

console.log(challenge.charCodeAt(11))

console.log(challenge.indexOf('a'))

console.log(challenge.lastIndexOf('a'))

let newString = 'You cannot end a sentence with because because because is a conjunction';
console.log(newString.indexOf('because'))

console.log(newString.lastIndexOf('because'))

console.log(newString.search('because'))

console.log(challenge.trim())

console.log(challenge.startsWith('3'))

console.log(challenge.endsWith('ipt'))

console.log(challenge.match(/a/gi))

let str1 = '30 Days of';
let str2 = ' JavaScript';
console.log(str1.concat(str2))

let repeatStr = ' 30 Days Of JavaScript';
console.log(repeatStr.repeat(2))