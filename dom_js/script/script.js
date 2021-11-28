var p = document.createElement('p');
document.body.insertBefore(p, document.querySelector('#out') );


p.innerHTML = 'Пример элемента DOM';
p.classList.add('main', 'green');


console.log(p)



