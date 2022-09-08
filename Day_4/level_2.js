let score = parseInt(prompt('Enter score'));
let grade = '';
if(score >= 80){
    console.log('You got an A')
}else if(score >= 70){
    console.log('You got a B')
}else if(score >= 60){
    console.log('You got a C')
}else if(score >= 50){
    console.log('You got a D')
}else{
    console.log('You got a F')
};


let season = prompt('Enter season');
if(season == 'september' || season == 'october' || season == 'november'){
    alert('The season is Autumn')
}else if(season == 'december' || season == 'january' || season == 'february'){
    alert('The season is Winter')
}else if(season == 'march' || season == 'april' || season == 'may'){
    alert('The season is Spring')
}else if(season == 'june' || season == 'july' || season == 'august'){
    alert('The season is Summer')
}else{
    alert('Input incorrect')
}


let day = prompt('What is the day today ');
switch(day){
    case 'monday':
        alert('Monday is a working day')
        break;
    case 'tuesday':
        alert('Tuesday is a working day')
        break;
    case 'wednesday':
        alert('Wednesday is a working day')
        break;
    case 'thursday':
        alert('Thursday is a working day')
        break;
    case 'friday':
        alert('Friday is a working day')
        break;
    case 'saturday':
        alert('saturday is a weekend')
        break;
    case 'sunday':
        alert('sunday is a weekend')
        break;
    default:
        alert('Input a correct day')            
}