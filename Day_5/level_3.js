const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24];
ages.sort();
const minAge = Math.min(...ages);
const maxAge = Math.max(...ages);
const medianAge = ages[4] + ages[5] % 2;
const averageAge = ages.reduce((a,b)=> a + b, 0) / 10;
const ageRange = maxAge - minAge;
const minAverage = Math.abs(minAge - averageAge);
const maxAverage = Math.abs(maxAge - averageAge);
let comparison;
if(minAverage === maxAverage){
    console.log(comparison = 'Both value are equal')
}else if(minAverage > maxAverage){
    console.log(comparison = 'minAverage is greater than maxAverage')
}else{
    console.log(comparison = 'minAverage is lesser than maxAverage')
}
