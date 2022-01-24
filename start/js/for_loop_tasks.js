outOne = document.querySelector('.out-1');
for (let i = 0; i < 3; i++) {
    for (let k = 0; k < 3; k++) {
        outOne.innerHTML += '*';
    }
    outOne.innerHTML += '_'
}

outTwo = document.querySelector('.out-2');
for (let i = 1; i < 4; i++) {

    for (let k = 0; k < 3; k++) {
        outTwo.innerHTML += '*_';
    }
    outTwo.innerHTML += k + '<br>';
}
