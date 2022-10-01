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
    for(let j = 1; j <= num; j++){
        let hex = '#'
        for(let i = 1; i <= 6; i++){
            let randomNum = Math.floor(Math.random() * hexCode.length)
            hex += hexCode[randomNum]
        }
        hexCodeGenerated.push(hex)
    }
    return hexCodeGenerated;
}
console.log(arrayOfHexaColors(5))


// Question 4
function arrayOfRgbColors(number) {
    let arrOfRgb = []
    for(let i = 1; i <= number; i++){
        let rgb = 'rgb('
        for(let j = 1; i <= 3; i++){
            let randomNum = Math.floor(Math.random() * 255)
            rgb += randomNum
        }
        arrOfRgb.push(`${rgb})`)
    }
    return arrOfRgb;
} 
console.log(arrayOfRgbColors(3))