let base = prompt('Enter base');
let height = prompt('Enter height')
let areaOfTriangle = alert(`The area of the triangle is ${0.5*base*height}`);


let side_a = prompt('Enter side A of the triangle');
let side_b = prompt('Enter side B of the triangle');
let side_c = prompt('Enter side C of the triangle');
let perimeterOfTriangle = parseInt(side_a) + parseInt(side_b) + parseInt(side_c);
alert(perimeterOfTriangle);


let length = parseInt(prompt('Enter length of the triangle'));
let width = parseInt(prompt('Enter width of the triangle'));
let perimeter = alert(`Perimeter of the triangle is ${2 * (length + width)}`);
let areaOfTri = alert(`Area of the triangle is ${length * width * (perimeter)}`);


let radius = parseInt(prompt('Enter radius'));
let pi = 3.14;
let area = alert(`The area of a circle is ${pi * radius * radius}`);
let circumference = alert(`The circumference of a circle is ${2 * pi * radius}`)


let y1 = 2;
let y2 = 2;
let x1 = 10;
let x2 = 6;
let m = (y2-y1)/(x2-x1);
console.log(m)


let hours = parseInt(prompt('Enter hours'));
let rate = parseInt(prompt('Enter rate per hour'));
let weeklyEarnings = alert(`Your weekly earning is ${hours * rate}`)


let yourName = prompt('Enter name');
let inputName = alert(yourName.length > 7? 'Your name is long': 'Your name is short');


let myFirstName = 'Ahmad';
let myLastName = 'Abdulazeez';
let output = myFirstName.length > myLastName.length? `Your first name, ${myFirstName} is longer 
than your family name, ${myLastName}`: `Your first name, ${myFirstName} is shorter than your 
family name, ${myLastName}`;
console.log(output)


let myAge = 30;
let yourAge = 25;
console.log(`I am ${myAge - yourAge} years older than you.`)


let birthYear = parseInt(prompt('Enter birth year'));
let currentYear = new Date().getFullYear();
let currentAge = currentYear - birthYear;
let stipulatedAge = 18;
let yourBirthYear = currentAge >= stipulatedAge? alert(`You are ${currentAge} years old. 
You are old enough to drive`) : alert(`You are ${currentAge} years old. You will be 
allowed to drive after ${stipulatedAge - currentAge} years.`)


let yearsLived = prompt('Enter number of years you live');
let secondsPerYear = 315360000;
let seconds = yearsLived * secondsPerYear;
let secondsLived = alert(`You lived ${seconds} seconds.`);


let time = new Date();
console.log(`${time.getFullYear()}-${time.getMonth()}-${time.getDay()}  ${time.getHours()}:${time.getMinutes()}`);
console.log(`${time.getDay()}-${time.getMonth()}-${time.getFullYear()}  ${time.getHours()}:${time.getMinutes()}`);
console.log(`${time.getDay()}/${time.getMonth()}/${time.getFullYear()}  ${time.getHours()}:${time.getMinutes()}`);
