let arr = [];

let array = [1, 2, 'ade', true, false];

console.log(array.length)

console.log(array[0])
console.log(array[2])
console.log(array[4])

let mixedDataTypes = [9, 'bimbo', true, 4, 'loco', false, 7];

let itCompanies = ["Facebook", "Google", "Microsoft", "Apple", "IBM", "Oracle", "Amazon"];

console.log(itCompanies)

console.log(itCompanies.length)

console.log(itCompanies[0])
console.log(itCompanies[1])
console.log(itCompanies[2])
console.log(itCompanies[3])
console.log(itCompanies[4])
console.log(itCompanies[5])
console.log(itCompanies[6])

console.log(itCompanies[0].toUpperCase())
console.log(itCompanies[1].toUpperCase())
console.log(itCompanies[2].toUpperCase())
console.log(itCompanies[3].toUpperCase())
console.log(itCompanies[4].toUpperCase())
console.log(itCompanies[5].toUpperCase())
console.log(itCompanies[6].toUpperCase())

console.log(itCompanies.join(', ') + ' are big IT companies')

let exist = itCompanies.includes('Amazon');
if(exist == true){
    console.log('Amazon')
}else{
    console.log('Company not found')
}

console.log(itCompanies.toString().match(/\w*oo\w*/g))

console.log(itCompanies.sort())

console.log(itCompanies.reverse())

console.log(itCompanies.slice(0, 3))

console.log(itCompanies.slice(4, 7))

console.log(itCompanies.slice(2, 5))

console.log(itCompanies.shift())

console.log(itCompanies.slice(1, 4))

console.log(itCompanies.pop())

console.log(itCompanies.slice(0, 0))

