function renderResult(e) {
  var xhr = e.target;
  var data = JSON.parse(xhr.responseText);
  var frag = document.createDocumentFragment();
  var ul = document.querySelector('ul');
  ul.innerHTML = '';

  data.forEach(function(item) {
    var li = document.createElement('li');
    li.innerText = item.name + " - " + item.tagline;

    frag.appendChild(li);
  });

  ul.appendChild(frag);
}

function refresh() {
  var xhr = new XMLHttpRequest();
  xhr.open('GET', 'http://blooming-beach-1104.herokuapp.com/');
  xhr.addEventListener('load', renderResult);
  xhr.send();
}

function addItem() {
  var name = document.querySelector('#i-name').value;
  var tagline = document.querySelector('#i-tagline').value;

  var data = {
    name: name,
    tagline: tagline,
  };

  var xhr = new XMLHttpRequest();
  xhr.open('POST', 'http://blooming-beach-1104.herokuapp.com/');
  xhr.addEventListener('load', refresh);
  xhr.send(JSON.stringify(data));
}

var sendbtn = document.querySelector('#btn-add');
sendbtn.addEventListener('click', addItem);


var btn = document.querySelector('#btn-refresh');
btn.addEventListener('click',refresh );

















