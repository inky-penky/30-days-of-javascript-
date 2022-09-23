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
