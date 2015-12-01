
function TextAreaWithLength(el) {
  el.innerHTML = TextAreaWithLength.HTML;

  this.el = {
    root: el,
    ta: el.querySelector('textarea'),
    panel: el.querySelector('.len'),
    btn_reset: el.querySelector('.reset'),
  };

  var boundSync = this.sync.bind(this);
  this.el.ta.addEventListener('input', boundSync);
  this.el.btn_reset.addEventListener('click', this.reset.bind(this));
}

TextAreaWithLength.HTML = '\
    <p>Length: <span class="len">0</span> \
      <button class="reset">Reset</button>\
    </p>\
    <textarea></textarea>\
';

TextAreaWithLength.prototype.sync = function() {
  this.el.panel.innerHTML = this.el.ta.value.length;
};

TextAreaWithLength.prototype.reset = function() {
  this.el.ta.value = '';
  this.sync();
};


var ta = document.querySelectorAll('.ta');
for ( var i=0; i < ta.length; i++ ) {
  var item = new TextAreaWithLength(ta[i]);
}



// no auto bind
// no auto shared functions

