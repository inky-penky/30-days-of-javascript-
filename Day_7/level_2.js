// Question 3
function printArray(array) {
    let arr = [];
    for(let i = 0; i < array.length; i++){
        arr.push(array[i]) 
    }
    return arr;
}
console.log(printArray([1, 'we', 'see', 6, true]))


// Question 4
function showDateTime() {
    let time = new Date();
    let day = time.getDay();
    let month = time.getMonth();
    let year = time.getFullYear();
    let getHours = time.getHours();
    let getMinute = time.getMinutes();
    let showDate = day + '/' + month + '/' + year + ' ' + getHours + ':' + getMinute;
    return showDate; 
};
console.log(showDateTime())


// Question 5
function swapValues(x, y) {
    return x = y
}
console.log(swapValues(3, 4))


// Question 6
function reverseArray(array) {
    let reverseArr = [];
    for(let i = array.length - 1; i >= 0; i--){
        reverseArr.push(array[i])
    }
    return reverseArr;
}
console.log(reverseArray([1, 2, 3, 4, 5, 6]))


// question 7
function capitalizeArray(array) {
    let capitalize = [];
    for(let i = 0; i < array.length; i++){
        capitalize.push(array[i].toUpperCase())
    }
    return capitalize;
}
console.log(capitalizeArray(['He','me', 'so']))


// Question 8
function addItem(item) {
    let items = [];
    for(let i = 0; i < item.length; i++){
        items.push(item[i])
    }
    return items;
}
console.log(addItem([1, 2, 3, 'him']))


// Question 9
function removeItem(arr, index) {
    arr.splice(index, 1)
    return arr;
}
console.log(removeItem([1, 2, 3, 4, 5, 6, 7], 3))


// Question 10
function sumOfNumbers(number) {
    let num = 0;
    for(let i = Math.min(...number); i <= Math.max(...number); i++){
        num += i
    }
    return num;
}
console.log(sumOfNumbers([2, 7]))


// Question 11
function sumOfOdds(number) {
    let oddNum = 0;
    for(let i = Math.min(...number); i <= Math.max(...number); i++){
        if(i % 2 == 1){
            oddNum += i
        }
    }
    return oddNum;
}
console.log(sumOfOdds([2, 5]))


// Question 12
function sumOfEven(number) {
    let evenNum = 0;
    for(let i = Math.min(...number); i <= Math.max(...number); i++){
        if(i % 2 == 0){
            evenNum += i
        }
    }
    return evenNum
}
console.log(sumOfEven([1, 5]))