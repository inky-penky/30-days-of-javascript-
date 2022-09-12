// Question 1
let newChar = "abcdefghijklmnopqrstuvwxyz1234567890";
let randNum = Math.floor(Math.random() * 30);
let randomCharacter = '';
for(let i = 1; i <= randNum; i++){
    let randomNumber = Math.floor(Math.random() * randNum)
    randomCharacter += newChar[randomNumber]
}
console.log(randomCharacter)


// Question 2
let randomValue = "abcdef1234567890";
let hexadecimalValue = "#";
for(let i = 1; i <= 6; i++){
    let randomNumber = Math.floor(Math.random() * randomValue.length)
    hexadecimalValue += randomValue[randomNumber]
}
console.log(hexadecimalValue)


// // Question 3
// let randValue = "01234567890";
// let bracket = ',)'
// let rgb = "rgb(";
// for(let i = 0; i < 3; i++){
//     let randomNumber = Math.floor(Math.random() * 256)
//     rgb += randomNumber + bracket
// }
// console.log(rgb)