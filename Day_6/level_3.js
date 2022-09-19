// Question 1
const unsortedCountries = [
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
  ];


// Question 2
let sortedCountries = unsortedCountries.sort().slice(0, unsortedCountries.length);
console.log(sortedCountries)


// Question 3
let sortedWebTechs = webTechs.sort();
let sortedMernStack = mernStack.sort();


// Question 4
let landCountries = [];
for(let country of countries){
  if(country.includes('land')){
    landCountries.push(country)
  }
}
console.log(landCountries)


// Question 5
// let maxCountryLength = 0;
// for(let country of countries){
//     maxCountryLength = country.length
// }
// console.log(maxCountryLength)


// Question 6
// Refer to question 4


// Question 7
let fourCharCountry = [];
for(let country of countries){
  if(country.length == 4){
    fourCharCountry.push(country)
  }
}
console.log(fourCharCountry)


// Question 8
let twoChar = [];
for(let country of countries){
  if(country.length >= 2){
    twoChar.push(country)
  }
}
console.log(twoChar)


// Question 9
const reversedCountries = [];
for (let i = countries.length - 1; i >= 0; i--) {
  reversedCountries.push(countries[i].toUpperCase());
}
console.log(reversedCountries)