var btn = document.querySelector('#btn-refresh');

function renderResult(e) {
  var xhr = e.target;
  var data = JSON.parse(xhr.responseText);
  var frag = document.createDocumentFragment();
  var ul = document.querySelector('ul');

  data.contacts.forEach(function(item) {
    var li = document.createElement('li');
    li.innerHTML = item.name;

    frag.appendChild(li);
  });

  ul.appendChild(frag);
}

function post() {
  var xhr = new XMLHttpRequest();
  xhr.open('POST', '/echo');
  xhr.addEventListener('load', function() {
    alert(xhr.responseText);
  });
  xhr.send(JSON.stringify({text: 'hello'}));
}

function refreshContacts() {
  var xhr = new XMLHttpRequest();
  xhr.open('GET', '/contacts.json');
  xhr.addEventListener('load', renderResult);
  xhr.send();
}


btn.addEventListener('click', refreshContacts);

