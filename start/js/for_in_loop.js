let out = document.querySelector('.out');

for ( let i = 0; i < 5; i++) {
     
    for (let k = 0; k < 10; k++){
        out.innerHTML += '*';
    }
    out.innerHTML += '<br>';
}
out.innerHTML += '<hr>';

for ( let i = 1; i < 10; i++){
    
    for ( let k = 1; k < 10; k++) {
         out.innerHTML += i+'*' + k + '=' + (i * k) + '<br>';
        // out.innerHTML += `${i}*${k}=${k * i}<br>`;
    }
    out.innerHTML += '<hr>';
    
}