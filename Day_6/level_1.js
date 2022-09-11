// Question 1
for(let i = 0; i <= 10; i++){
    console.log(i)
};
let i = 0;
while(i <= 10){
    console.log(i)
    i++
};
let p =0;
do{
    console.log(p)
    p++
} while(p <= 10)
// Question 2

for(let n = 10; n >= 0; n--){
    console.log(n)
};
let m = 10;
while(m >= 0){
    console.log(m)
    m--
};
let q = 10;
do{
    console.log(q)
    q--
} while(q >= 0)


// Question 3

// for(let ii = 0; ii <= n; ii++){
//     console.log(ii)
// }


// Question 4
let output = '';
for(let j = 1; j <= 7; j++){
    output += '#'
    console.log(output) 
}


// Question 5
for(let j = 0; j <= 10; j++){
    console.log(`${j} x ${j} = ${j * j}`)
}


// Question 6
for(let i = 0; i <= 10; i++){
    console.log(`${i} ${i**2} ${i**3}`)
}


// Question 7
for(let i = 0; i <= 100; i++){
    if(i % 2 == 0){
        console.log(i)
    }
}


// Question 8
for(let i = 0; i <= 100; i++){
    if(i % 2 == 1){
        console.log(i)
    }
}// Question 8
for(let i = 0; i <= 100; i++){
    if(i % 2 == 1){
        console.log(i)
    }
}


// // Question 9
// for(let i = 0; i <= 100; i++){
//     if(i % i == i){
//         console.log(i)
//     }
// }


// Question 10
let sum = 0;
for(let i = 0; i <= 100; i++){
    sum += i
}
console.log(`The sum of all numbers from 0 to 100 is ${sum}.`)


// Question 11
let even = 0;
let odd = 0;
for(let i = 0; i <= 100; i++){
    if(i % 2 == 0){
        even += i
    }else {
        odd += i
    }
}
console.log(`The sum of all evens from 0 to 100 is ${even}. And the sum of all odds from 0 to 100 is ${odd}.`)


// Question 12
let newEven = 0;
let newOdd = 0;
for(let i = 0; i <= 100; i++){
    if(i % 2 == 0){
        newEven += i
    }else {
        newOdd += i
    }
}
console.log(Array(newEven, newOdd))


// Question 13
let array = []
for(let i = 1; i <= 5; i++){
    let arr = Math.floor(Math.random(i) * 10)
    array.push(arr)
}
console.log(array)


// Question 14
let uniqueArray = [];
for (let i = 0; uniqueArray.length < 5; i++) {
  let random = Math.floor(Math.random() * 11);
  if (uniqueArray.indexOf(random) === -1) uniqueArray.push(random);
}
console.log(uniqueArray);


// Question 15

let char = "abcdefghijklmnopqrstuvwxyz1234567890";
let randomChar = '';
for(let i = 1; i <= 5; i++){
    let randomNum = Math.floor(Math.random(i) * char.length)
    randomChar += char[randomNum]
}
console.log(randomChar)