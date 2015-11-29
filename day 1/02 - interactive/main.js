var a = document.querySelector('#a');

// HTMLDivElement

a.innerHTML = 'Hello World';
a.style.height = '50px';
a.style.lineHeight = '50px';

var b = document.querySelectorAll('.box');
b[0].innerHTML = 0;
b[1].innerHTML = 1;
b[2].innerHTML = 2;
b[3].innerHTML = 3;

var counter =0;

function showcount(e) {
  counter++;
  e.target.innerHTML = counter;
}

function show2(e) {
  counter++;
  e.target.innerHTML = counter * 2;
}


var c = document.querySelector('#b');
c.addEventListener('click', show2);

a.addEventListener('click', showcount);
b[2].addEventListener('click', showcount);



















