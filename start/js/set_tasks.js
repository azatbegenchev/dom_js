let s1 = new Set();
let s2 = new Set();
let s3 = new Set();
let i2 = document.querySelector('.i-2');
let i3 = document.querySelector('.i-3');



console.log(s1);

s1.add('h');

s1.add('b');

s1.add('o');

s3.add('patriot');
s3.add('cruise');
s3.add('radio');

console.log(s1);
console.log(s3);

document.querySelector('.b-2').onclick = function f2() {
    s2.add(i2.value);
    console.log(s2);
}

document.querySelector('.b-3').onclick = function f3() {
    s3.delete(i3.value);
    console.log(s3);
}