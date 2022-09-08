let month = prompt('Enter a month');
if(month == 'september' || month == 'april' || month == 'june' || month == 'november'){
    alert(`${month} has 30 days`)
}else if(month == 'february'){
    alert(`${month} has 28 days`)
}else if(month == 'january' || month == 'march' || month == 'may' || month == 'july' || month == 'august' || month == 'october' || month == 'december'){
    alert(`${month} has 31 days`)
}else{
    alert('Input incorrect')
}



let monthInput = prompt('Enter a month');
switch(monthInput){
    case 'january':
        alert(`${monthInput} has 31 days`)
        break;
    case 'february':
        alert(`${monthInput} has 28 days and 29 days on a leap year`)
        break;
    case 'march':
        alert(`${monthInput} has 31 days`)
        break;
    case 'april':
        alert(`${monthInput} has 30 days`)
        break;
    case 'may':
        alert(`${monthInput} has 31 days`)
        break;
    case 'june':
        alert(`${monthInput} has 30 days`)
        break;
    case 'july':
        alert(`${monthInput} has 31 days`)
        break;
    case 'august':
        alert(`${monthInput} has 31 days`)
        break;
    case 'september':
        alert(`${monthInput} has 30 days`)
        break;
    case 'october':
        alert(`${monthInput} has 31 days`)
        break;
    case 'november':
        alert(`${monthInput} has 30 days`)
        break;
    case 'december':
        alert(`${monthInput} has 31 days`)
        break;
}