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
    let date = document.querySelector('.date');
    let.innerHTML = document.querySelector('#three').value;
}