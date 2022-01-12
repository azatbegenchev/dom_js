// let a = 6;

// if (a > 9) {
//     console.log('Yes');
// }
// else {
//     console.log('else')
// }

const button = document.querySelector('button');
const input = document.querySelector('.age');


//()=> стрелочная функция
button.onclick = ()=> {
    let num = +input.value;
    if (num >= 16 && num < 60) {
        console.log('welcome !!!');
    }
    
    else if( num > 60) {
        console.log('Ты точно сюда ?');
    }
    
    else {
        console.log('Ты не пройдешь !!!');
    }

    switch (num){
        case 15:
            console.log('Еще год потерпи !');
            break;
        case 16:
            console.log('Ура уже можно');
        default:
            console.log('okkk');
    }


}

let b = 4;
console.log(b == 4);

