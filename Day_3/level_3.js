let newYear = time.getFullYear();
let newMonth = time.getMonth() < 10 ? '0' + time.getMonth() : time.getMonth();
let newDay = time.getDay() < 10 ? '0' + time.getDay() : time.getDay();
let newHour = time.getHours() < 10 ? '0' + time.getHours() : time.getHours();
let newMinute = time.getMinutes() < 10 ? '0' + time.getMinutes() : time.getMinutes();
console.log(`${newYear}-${newMonth}-${newDay} ${newHour}:${newMinute}`)