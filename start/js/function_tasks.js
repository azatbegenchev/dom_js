let a1 = '<br>' + 'This is a "a1" variable';
let a2 = 'This is a "a2" variable';
let div = document.querySelector('.out');
let div1 = document.querySelector('.out-1');
let div2 = document.querySelector('.out-3');
document.querySelector('.b-1').onclick = function t1() {
    div.innerHTML = a1;
}

function t2() {
    return a2;
}

// let c2 = t2();

document.querySelector('.b-2').onclick = () => {
    div1.innerHTML = '<br>' + t2();
}

function t3(a, b) {
    return a * b;
}

document.querySelector('.b-3-1').onclick = () => {
    div2.innerHTML = '<br>' + t3(3, 7);


}

document.querySelector('.b-3-2').onclick = () => {
    div2.innerHTML = '<br>' + t3(3, 5);


}