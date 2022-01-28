let f1 = document.querySelector('.f-1');
function one() {            //объявление функции
    console.log('work')
}
one(); //вызов функции

f1.onclick = one; //вызов функции

console.log(1 + one());
console.log(one());

function two() {
    console.log('work 2000');
    return 54;
}

two()

console.log(1 + two());

let a = 8;
let b = 9;

function multi() {
    console.log(a * b);
    return a * b;
}

let c1 = multi();
let c2 = 10 * multi();
console.log(c1, c2);

function multi2(x, y) {
    return x * y;
}

function multi3(x = 10, y = 5) {
    return x * y;
}
console.log(multi2(4, 5));
console.log(multi2(20, 5));
console.log(multi2(20, b));

console.log(multi3(30));

document.querySelector('.f-2').onclick = function () {
    console.log('function f-2 worked');
}

document.querySelector('.f-2').onclick = () => {
    console.log('function f-2 with array')
}