
document.querySelector('.b-1').onclick = function t1() {
    let i = 1;
    out1 = document.querySelector('.out-1');
    while (i <= 50) {
        out1.innerHTML += i + '_';
        i++
    }
}

document.querySelector('.b-2').onclick = function t2() {
    let i = 2;
    out2 = document.querySelector('.out-2');
    while (i <= 50) {
        out2.innerHTML += i + '_';
        i = i + 2
    }
}

document.querySelector('.b-3').onclick = function t2() {
    let i = 25;
    out3 = document.querySelector('.out-3');
    while (i >= 7) {
        out3.innerHTML += i + '_';
        i--
    }
}

