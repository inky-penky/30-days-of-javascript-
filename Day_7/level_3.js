// Question 1
// function userIdGenerator() {
//     let userIdChar = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
//     let userId = '';
//     let numOfChar = prompt('Input number of character to be generated')
//     let numOfId = prompt('Input the number of Ids to be generated')
//     for(let i = 1; i <= numOfId; i++){
//         for(let j = 1; j <= numOfChar; j++) {
//             let randomNum = Math.floor(Math.random() * userIdChar.length)
//             userId += userIdChar[randomNum]
//         }
//         userId += `${userId[i]}\n`
//     }
//     return userId;
// }
// console.log(userIdGenerator())


function rgbColorGenerator() {
    let rgbColor = 'rgb(';
    for(let i = 1; i <= 3; i++){
        let randomNum = Math.floor(Math.random() * 255)
        rgbColor += `${randomNum},` 
    }
    return rgbColor.concat(')');
};
console.log(rgbColorGenerator())


// Question 3
function arrayOfHexaColors(num) {
    let hexCode = 'abcdef1234567890';
    let hexCodeGenerated = [];
    for(let i = 1; i <= num; i++){
        for(let i = 1; i <= 6; i++){
            let randomNum = Math.floor(Math.random() * hexCode.length)
            hexCodeGenerated.push(hexCode[randomNum])
        }
        hexCodeGenerated 
    }
    return hexCodeGenerated;
}
console.log(arrayOfHexaColors(3))