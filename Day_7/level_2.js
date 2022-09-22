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
    let showDate = day + '/' + month + '/' + year;
    return showDate; 
    
}
console.log(showDateTime())


// Question 5