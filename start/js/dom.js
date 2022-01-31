const one = document.querySelector('.one');

one.style.width = '150px';
one.style.paddingBottom = '40px';

// console.log(one.style);

one.classList.add('two', 'three');
one.classList.remove('three');
const toggle = document.querySelector('.toggle');

toggle.onclick = function () {
    this.classList.toggle('three');
}

console.log(one.getAttribute('data'));
console.log(document.querySelector('link').getAttribute('href'));