let a = 'Иван';
let b = '37';
let z7 = 'Овен';
let c = ['Иван', 37, 'Овен'];
let d = [];

console.log(c.length);

for (let i = 0; i < c.length; i++) {
    document.querySelector('.out').innerHTML += c[i] + '<br>';
}