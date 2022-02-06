let a1 = [55, 100, 555,];
out1 = document.querySelector('.out-1');

document.querySelector('button').onclick = function f1() {
    out1.innerHTML = a1[0];
}

let a2 = ['hello', 'hi', 'lease',];
out2 = document.querySelector('.out-2');

document.querySelector('.b2').onclick = function f2() {
    out2.innerHTML = a2[1];
}

let a3 = ['hello', 'my', 'lease',];
out3 = document.querySelector('.out-3');

document.querySelector('.b3').onclick = function f3() {
    out3.innerHTML = a3[1];
}