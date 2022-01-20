document.querySelector('button').onclick = () => {

    console.log(document.querySelector('#one').value);//вывод значения input в консоль
    let div = document.querySelector('.pass'); //объявления переменной куда выводить значения поля
    div.innerHTML = document.querySelector('#one').value;//вывод на страницу

} //тип стрелочной функции

document.querySelector('#btn-1').onclick = function () {
    console.log(document.querySelector('#two').value);
    let color = document.querySelector('#two').value;
    document.querySelector('#btn-1').style.backgroundColor = color;
    document.querySelector('h3').style.color = color;
}

document.querySelector('#btn-2').onclick = function () {
    console.log(document.querySelector('#three').value);
    document.querySelector('.date').innerHTML = document.querySelector('#three').value;
}

document.querySelector('#four').oninput = function () { //функция работает при перемещение ползунка
    console.log(document.querySelector('#four').value);
    document.querySelector('.range-out').innerHTML = document.querySelector('#four').value
    
}

// document.querySelector('#btn-3').onclick = function () { //функция работает при нажатии кнопки
//     console.log(document.querySelector('#four').value);
//     let four = document.querySelector('.range-out');
//     four.innerHTML = document.querySelector('#four').value;
// }

document.querySelector('#btn-4').onclick = () =>{
    console.log(document.querySelector('#i2').value);
    let myCheckBox = document.querySelector('#i2');
    console.log(myCheckBox.checked);
    if (myCheckBox.checked) {
        console.log('Нажат');
    } else {
        console.log('Не нажат');
    }
}

document.querySelector('#btn-5').onclick = (event) =>{
    event.preventDefault();
    let text = document.querySelector('#i3');
    console.log(text.value);
    text.value = 'one';
}

document.querySelector('#btn-5').onclick = (event) =>{
    event.preventDefault();
    let form = document.querySelector('form');
    console.log(form);
    console.log(form.elements.i3.value);
    console.log(form.elements.i4.value);
}
