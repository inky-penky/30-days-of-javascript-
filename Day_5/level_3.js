const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24];
ages.sort();
const minAge = Math.min(...ages);
const maxAge = Math.max(...ages);
const medianAge = ages[4] + ages[5] % 2;


console.log(medianAge)