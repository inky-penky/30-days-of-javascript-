// Question 1
function userIdGenerator(numOfChar, numOfId) {
    let userIdChar = "0123456789abcdefghijklmnopqrstuvwxyz";
    let userId = '';
    numOfChar = prompt('Input number of character to be generated')
    numOfId = prompt('Input the number of Ids to be generated')
    for(let i = 1; i <= numOfChar; i++){
        let randomNum = Math.floor(Math.random() * userIdChar.length)
        userId += userIdChar[randomNum]
    }
    return userId.toUpperCase();
}
console.log(userIdGenerator())