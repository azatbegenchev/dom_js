document.querySelector('.one').onclick = function (e) {
    console.log(e);
    console.log('click');
}

document.querySelector('.two').onclick = function () {
    console.log('click2');
}

document.querySelector('.two').ondblclick = () => {
    console.log('double click');
}

document.querySelector('.two').oncontextmenu = () => {
    console.log('right button');
    return false;
}

let w = 75;
document.querySelector('.four').onmousemove = () => {
    document.querySelector('.four').style.width = w + 'px';
    w++;

}

document.querySelector('.three').onmouseenter = () => {
    document.querySelector('.three').style.background = 'red';
    console.log(1);

}

document.querySelector('.three').onmouseleave = () => {
    document.querySelector('.three').style.background = 'green';
    console.log(1);

}

document.querySelector('.three').onmousedown = () => {
    document.querySelector('.three').style.background = 'orange';
    console.log(1);

}

document.querySelector('.three').onmouseup = () => {
    document.querySelector('.three').style.background = 'blue';
    console.log(1);

}

let p = 10;
document.querySelector('button').onclick = function (e) {
    p++
    document.querySelector('progress').value = p;
}
