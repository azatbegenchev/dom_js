const inputI31 = document.querySelector('.i-31');
const inputI32 = document.querySelector('.i-32');
const f3 = document.querySelector('.b-3');
let div = document.querySelector('.out-3');

f3.onclick = function(){

    let num31 = +inputI31.value;
    let num32 = +inputI32.value;

    if (num31 >= num32) {
        console.log(num31);
        div.innerHTML = num31;
    } 
    
    else {
        console.log(num32);
        div.innerHTML = num32;
    }
}