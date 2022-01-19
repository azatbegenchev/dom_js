
const f2 = document.querySelector('.b-2');
let div = document.querySelector('.out-2');


f2.onclick = function() {
    
    let a21 = 100;
    let a22 = 500;
    
    if (a21 > a22) {
        div.innerHTML = a21;
        
    } 
    
    else {
        div.innerHTML = a22;
        
    }
}


