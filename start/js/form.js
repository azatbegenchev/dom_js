// document.querySelector('button').onclick = () => {
//     console.log(document.querySelector('#one').value);
//     //style
//     document.querySelector('button').style.backgroundColor = document.querySelector('#one').value

// }

// document.querySelector('#one').oninput = () => {
//     console.log(document.querySelector('#one').value);
//     document.querySelector('span').innerHTML = document.querySelector('#one').value
// }

document.querySelector('#btn-1').onclick = () => {
    console.log(document.querySelector('#i2').value);
    let myCheckbox = document.querySelector('#i2')
    console.log(myCheckbox.checked)
    if (myCheckbox.checked ) {
        console.log('pressed');

    }
    else {
        console.log('unpressed');
    }

}

document.querySelector('#btn-2').onclick = () => {
    event.preventDefault();
    let text  = document.querySelector('#two');
    console.log(text.value);
    text.value = 'one';
}