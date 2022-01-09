document.querySelector('.b-1').onclick = myClick;

function myClick() {

    let a = document.querySelector('.i-1').value;
    let b = document.querySelector('.i-2').value;
    console.log('Hello '+ a +' ' +b);
    
    document.querySelector('.out').innerHTML = 'Hello '+ a +" "+ b;

}