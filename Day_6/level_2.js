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


// Question 3
// let randValue = "01234567890";
// let bracket = ',)'
// let rgb = "rgb(";
// for(let i = 0; i < 3; i++){
//     let randomNumber = Math.floor(Math.random() * 256)
//     rgb += randomNumber + bracket
// }
// console.log(rgb)



// Question 4
const countries = [
    'Albania',
    'Bolivia',
    'Canada',
    'Denmark',
    'Ethiopia',
    'Finland',
    'Germany',
    'Hungary',
    'Ireland',
    'Japan',
    'Kenya'
  ]
let newCountries = []
for(let i = 0; i < countries.length; i++){
    newCountries.push(countries[i].toUpperCase())
}
console.log(newCountries)


// Question 5
let countriesLength = []
for(let country of countries){
    countriesLength.push(country.length)
}
console.log(countriesLength)


// Question 6
let countriesAbbrev = []
for(let country of countries){
    countriesAbbrev.push(country, country.slice(0, 3).toUpperCase(), country.length)
}
console.log(countriesAbbrev)


// Question 7
let countryIncludes = []
for(let country of countries){
    if(country.includes('land')){
        countryIncludes.push(country)
    };
    if(country.includes('land') == 0){
        console.log('All these countries are without land')
    }
}
console.log(countryIncludes)


// Question 8
let countrySubstring = []
for(let country of countries){
    if(country.endsWith('ia')){
        countrySubstring.push(country)
    } else if(country.endsWith('ia') == 0){
        console.log('These countries ends without ia')
    }
}
console.log(countrySubstring)


// Question 9
let longestChar = [];
for(let i = 0; i < countries.length; i++){
    if(longestChar.length <= countries[i].length){
        longestChar = countries[i]
    }
    
}
console.log(longestChar)
