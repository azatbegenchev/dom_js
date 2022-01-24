document.querySelector('.b-1').onclick = function t1() {
    let b = 17;
    div = document.querySelector('.out-1');


    for (let i = 1; i < b; i = i + 1) {
        div.innerHTML += i + '_';

    }
}

document.querySelector('.b-2').onclick = function t2() {
    let b = 39;
    div = document.querySelector('.out-2');


    for (let i = 12; i < b; i = i + 2) {
        div.innerHTML += i + '_';

    }
}

document.querySelector('.b-3').onclick = function t3() {
    let b = 6;
    div = document.querySelector('.out-3');


    for (let i = 25; i > b; i--) {
        div.innerHTML += i + '_';

    }
}
