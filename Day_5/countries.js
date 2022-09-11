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
  ];

if(countries.includes('Ethiopia')){
  console.log('ETHIOPIA')
}else{
  countries.push('Ethiopia')
}

console.log(countries.slice(0, 10))

console.log(countries.slice(5, 6))

let firstHalve = countries.slice(0, 5)
firstHalve.push('Madagascar')
let secondHalve = countries.slice(5, 11)
console.log(firstHalve)
console.log(secondHalve)