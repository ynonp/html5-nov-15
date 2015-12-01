
function TextAreaWithLength(el, key) {
  el.innerHTML = TextAreaWithLength.HTML;

  this.key = key;

  this.el = {
    root: el,
    ta: el.querySelector('textarea'),
    panel: el.querySelector('.len'),
    btn_reset: el.querySelector('.reset'),
  };

  var boundSync = this.sync.bind(this);
  this.el.ta.addEventListener('input', boundSync);
  this.el.btn_reset.addEventListener('click', this.reset.bind(this));


  this.load();
}

TextAreaWithLength.HTML = '\
    <p>Length: <span class="len">0</span> \
      <button class="reset">Reset</button>\
    </p>\
    <textarea></textarea>\
';

TextAreaWithLength.prototype.save = function() {
  localStorage.setItem(this.key, this.el.ta.value);
};

TextAreaWithLength.prototype.load = function() {
  var data = localStorage.getItem(this.key);
  if ( data != null ) {
    this.el.ta.value = data;
    this.sync();
  }
};




TextAreaWithLength.prototype.sync = function() {
  this.el.panel.innerHTML = this.el.ta.value.length;
  this.save();
};

TextAreaWithLength.prototype.reset = function() {
  this.el.ta.value = '';
  this.sync();
};


var ta = document.querySelectorAll('.ta');
var items = [];

for ( var i=0; i < ta.length; i++ ) {
  items.push(new TextAreaWithLength(ta[i], "ta" + i));
}



// no auto bind
// no auto shared functions

