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


// Question 10
let shortestChar = [];
for(let i = 0; i < countries.length; i++){
    shortestChar = countries[i];
    
}
console.log(shortestChar)


//Question 11
const webTechs = [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Redux',
    'Node',
    'MongoDB'
  ]
let longestWord = [];
for(let i = 0; i < webTechs.length; i++){
    if(longestWord.length <= webTechs[i].length){
        longestWord = webTechs[i]
    }    
};
console.log(longestWord)


// Question 12
// let webTechArr = webTechs
// for(let stack of webTechs){
//     webTechArr.push([stack], stack.length)
// };


// Question 13
const mernStack = ['MongoDB', 'Express', 'React', 'Node']
let acronym = [];
for(let stack of mernStack){
    acronym.push(stack[0])
}
console.log(acronym)


// Question 14
const fullstack = ["HTML", "CSS", "JS", "React", "Redux", "Node", "Express", "MongoDB"];
for(let stack of fullstack){
    console.log(stack)
}


// Question 15
let fruit = ['banana', 'orange', 'mango', 'lemon'];
let newFruit = [];
for(let i = fruit.length - 1; i >= 0; i--){
    newFruit.push(fruit[i])
}
console.log(newFruit)


// question 16
const fullStack = [
    ['HTML', 'CSS', 'JS', 'React'],
    ['Node', 'Express', 'MongoDB']
  ];
let newStack = fullStack.join().toUpperCase().replace(",", " ");
let finalStack;
for(let stack of fullStack){
    for(let one of stack){
        finalStack = one.toUpperCase()
        console.log(finalStack)
    }
}