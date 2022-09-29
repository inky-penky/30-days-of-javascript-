// Question 1
function userIdGenerator() {
    let userIdChar = "0123456789abcdefghijklmnopqrstuvwxyz";
    let userId = '';
    for(let i = 0; i <= 6; i++){
        let randomNum = Math.floor(Math.random() * userIdChar.length)
        userId += userIdChar[randomNum]
    }
    return userId.toUpperCase();
}
function userIdGeneratedByUser(numOfChar, numOfId) {
    numOfChar = prompt('Input number of character to be generated')
    numOfId = prompt('Input the number of Ids to be generated')
}