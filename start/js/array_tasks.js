let num = 1;
const ar1 = [100, 'string', (num > 0), (num < 0)];
let out1 = document.querySelector('.out-1');

document.querySelector('.b-1').onclick = () => {
    out1.innerHTML = '<br>' + ar1;
}

