const f1 = document.querySelector('.b-1');
const myInput = document.querySelector('.i-1');
let div = document.querySelector('.out');

f1.onclick = function(){
    let number = +myInput.value;

    if (number == 4) {
        div.innerHTML = 'true';
    }
    else{
        div.innerHTML = 'false';
    }
}