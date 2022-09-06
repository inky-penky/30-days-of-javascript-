let newSentence = 'Love is the best thing in this world. Some found their love and some are still looking for their love.';
console.log(newSentence.match(/love/gi))

let anotherSentence = 'You cannot end a sentence with because because because is a conjunction';
console.log(anotherSentence.match(/because/gi))

const updateSentence = '%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching';
const updatedSentence = updateSentence.replace(/[^a-zA-Z0-9 ]/g, "")
console.log(updatedSentence)
console.log(updatedSentence.search(/\b^[a-zA-Z]/gi))


const monthlySalary = 5_000 * 12;
const annualBonus = 10_000;
const onlineCourses = 15_000 * 12;
let totalAnnualIncome;

console.log(totalAnnualIncome = `$ ${monthlySalary + annualBonus + onlineCourses}`)