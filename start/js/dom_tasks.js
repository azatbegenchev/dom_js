const out1 = document.querySelector('.out-1');
document.querySelector('.b-1').onclick = () => {
    out1.style.width = '200px';
    out1.style.paddingBottom = '90px';
}

document.querySelector('.b-2').onclick = function f2() {
    out1.classList.add('two')
}

document.querySelector('.b-3').onclick = function f3() {
    out1.classList.remove('two')
}