// Question 1
function fullName(){
    let firstName = 'Ahmad'
    let lastName = 'Abdulazeez'
    let fullName = firstName + ' ' + lastName
    return fullName;
}
console.log(fullName())


// Question 2
function myFullName(firstName, lastName){
    let fullName = firstName + ' ' + lastName
    return fullName;
}
console.log(myFullName('Ahmad', 'Abdulazeez'))


// Question 3
function addNumbers(a, b) {
    let sum = a + b;
    return sum;
}
console.log(addNumbers(2, 3))


// Question 4
function areaOfRectangle(length, width){
    let area = length * width
    return area;
}
console.log(areaOfRectangle(3, 4))


// Question 5
function perimeterOfRectangle(length, width) {
    let perimeter = 2 * (length + width)
    return perimeter;
}
console.log(perimeterOfRectangle(4, 4))


// Question 6
function volumeOfRectPrism(length, width, height) {
    let volume = length * width * height
    return volume;
}
console.log(volumeOfRectPrism(5, 5, 4))


// Question 7
function areaOfCircle(r) {
    let area = Math.PI * r * r
    return area;
}
console.log(areaOfCircle(3))


// Question 8
function circumOfCircle(r) {
    let circumference = 2 * Math.PI * r
    return circumference;
}
console.log(circumOfCircle(6))


// Question 9
function densityOfSubstance(mass, volume) {
    let density = mass / volume
    return density;
}
console.log(densityOfSubstance(40, 4))


// Question 10
function speedOfObject(distance, time){
    let speed = distance / time
    return speed;
}
console.log(speedOfObject(100, 25))


// Question 11
function weightOfSubstance(mass, gravity = 9.8){
    let weight = mass / gravity
    return weight;
}
console.log(weightOfSubstance(20))


// Question 12
function convertCelsiusToFahrenheit(oC) {
    let oF = (oC * 9/5) + 32
    return oF;
}
console.log(convertCelsiusToFahrenheit(32))


// Question 13
function bodyMassIndex(weight, height){
    let BMI = weight / (height * height)
    return BMI
};
console.log(bodyMassIndex(74, 190))

function BMI(param){
    if(param <= 18.5){
        return 'underweight'
    }else if(param <= 24.9){
        return 'normal weight'
    }else if(param <= 29.9){
        return 'overweight'
    }else{
        return 'obese'
    }
}
console.log(BMI(bodyMassIndex(74, 190)))




// Question 14
function checkSeason(month) {
    switch (month.toLowerCase()) {
      case "january":
      case "february":
      case "march":
        return "winter";
      case "april":
      case "may":
      case "june":
        return "spring";
      case "july":
      case "august":
      case "september":
        return "summer";
      case "october":
      case "november":
      case "december":
        return "autumn";
      default:
        return "Not a month";
    }
  }
  console.log(checkSeason("november"));


  // Question 15
  const findMax = (...args) => {
    let maxNum = -Infinity
    for(let i = 0; i < args.length; i++){
        if(args[i] > maxNum){
            maxNum = args[i];
        }
    }
    return maxNum
  }

  console.log(findMax(2, 5, 6, 7, 9))