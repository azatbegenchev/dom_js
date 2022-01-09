let myFirstInput = document.querySelector('.myFiInput');
let mySecondInput = document.querySelector('.mySeInput');
let myButton = document.querySelector('.myButton');
let div = document.querySelector('.out');

myButton.onclick = function() {
    
let fullName = 'Hello ' + myFirstInput.value +" "+ mySecondInput.value;
div.innerHTML = fullName;

myFirstInput.value = '';
mySecondInput.value = '';
    
   


}

