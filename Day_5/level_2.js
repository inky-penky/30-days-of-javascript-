let text = 'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.';
let word = text.replace(/[^a-zA-Z ]/g, "")
let words = word.split(' ');
console.log(words)
console.log(words.length)


const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey'];
const addMeat = shoppingCart.unshift('Meat');
const addSugar = shoppingCart.push('Sugar');
const removeHoney = shoppingCart.indexOf('Honey')
shoppingCart.splice(removeHoney, 1) ;
const updateTea = shoppingCart.indexOf('Tea')
shoppingCart[updateTea] = 'Green Tea'
console.log(shoppingCart)


const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux'];
const backEnd = ['Node','Express', 'MongoDB'];
const fullStack = frontEnd.concat(backEnd);
console.log(fullStack)