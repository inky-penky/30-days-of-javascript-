let firstName = 'Ahmad';
let lastName = 'Abdulazeez';
let country = 'Nigeria';
let city = 'Ilorin';
let age = 24;
let isMarried = false;
let year = new Date().getFullYear;

console.log(typeof(firstName))
console.log(typeof(lastName))
console.log(typeof(country))
console.log(typeof(city))
console.log(typeof(age))
console.log(typeof(isMarried))
console.log(typeof(year))


console.log(typeof('10') == 10)


console.log(parseInt('9.8')  == 10)


console.log('0' == 0)
console.log('' == 0)
console.log('null' == 'null')

console.log('' == 'me')
console.log(-1 == 2)
console.log(-1 == true)


console.log(4 > 3)
console.log(4 >= 3)
console.log(4 < 3)
console.log(4 <= 3)
console.log(4 == 4)
console.log(4 === 4)
console.log(4 != 4)
console.log(4 !== 4)
console.log(4 != '4')
console.log(4 == '4')
console.log(4 === '4')
let word_1 = 'python';
let word_2 = 'jargon';
console.log(word_1.length < word_2.length)


console.log(4 > 3 && 10 < 12)
console.log(4 > 3 && 10 > 12)
console.log(4 > 3 || 10 < 12)
console.log(4 > 3 || 10 > 12)
console.log(!(4 > 3))
console.log(!(4 < 3))
console.log(!(false))
console.log(!(4 > 3 && 10 < 12))
console.log(!(4 > 3 && 10 > 12))
console.log(!(4 === '4'))
console.log('python'.includes('on') && 'jargon'.includes('on') )


let date = new Date()
console.log(date.getFullYear())
console.log(date.getMonth())
console.log(date.getDate())
console.log(date.getDay())
console.log(date.getHours())
console.log(date.getMinutes())
console.log(Date.now())
