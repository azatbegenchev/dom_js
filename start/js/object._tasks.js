let a1 = { "one": 15, "two": 16, "five": 20 };
let a2 = { "one": "hello", "two": "mahai", "five": "hi" };
let a3 = { "one": "hello", "two": "mahai", "five": "hi" };


let out1 = document.querySelector('.out-1');
let out2 = document.querySelector('.out-2');
let out3 = document.querySelector('.out-3');

document.querySelector('.b-1').onclick = function f1() {
    out1.innerHTML = '<br>' + a1.two;
}

document.querySelector('.b-2').onclick = function f2() {
    out2.innerHTML = '<br>' + a2.five;

}

document.querySelector('.b-3').onclick = function f3() {
    out3.innerHTML = '<br>' + '_' + a3.five;

}