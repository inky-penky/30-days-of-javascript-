// Question 1
let newChar = "abcdefghijklmnopqrstuvwxyz1234567890";
let randNum = Math.floor(Math.random() * 30);
let randomCharacter = '';
for(let i = 1; i <= randNum; i++){
    let randomNumber = Math.floor(Math.random(i) * randNum)
    randomCharacter += newChar[randomNumber]
}
console.log(randomCharacter)


// Question 2
