var btn = document.querySelector('#btn-refresh');
var add = document.querySelector('#btn-add');


function addAnotherDay() {
  var rooms = ['badal', 'hermon', 'dotan', 'CTR2'];
  var room_id = Math.floor(Math.random() * rooms.length);
  var room_name = rooms[room_id];

  var xhr = new XMLHttpRequest();
  xhr.open('POST', '/rooms');
  xhr.addEventListener('load', refresh);

  xhr.send(JSON.stringify({name: room_name}));
}


function onResult(e) {
  var xhr = e.target;
  var data = JSON.parse(xhr.responseText);

  var ul = document.querySelector('ul');
  ul.innerHTML = '';

  for ( var i=0; i < data.length; i++ ) {
    ul.innerHTML += "<li>" + data[i] + "</li>";
  }
}

function refresh() {
  var xhr = new XMLHttpRequest();
  xhr.open("GET", "/rooms");

  xhr.addEventListener('load', onResult);

  xhr.send();
}

btn.addEventListener("click", refresh);
add.addEventListener('click', addAnotherDay);
