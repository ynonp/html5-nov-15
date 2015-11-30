function Clicker(el) {
  this.clicks =0;
  this.el = {
    btn: el.querySelector('button'),
    panel: el.querySelector('.times'),
  };  
  

  // long solution (same as bind)
  // var self = this;
  // function call_inc_with_correct_this() {
  //   self.inc();
  // }

  this.el.btn.addEventListener('click', this.inc.bind(this));
}

Clicker.prototype.inc = function() {
  this.clicks++;
  this.el.panel.innerHTML = this.clicks;
};

Clicker.prototype.setCount = function(count) {
  this.clicks = count;
  this.el.panel.innerHTML = this.clicks;
};




var c1 = new Clicker(document.querySelector('#c1'));
var c2 = new Clicker(document.querySelector('#c2'));
var c3 = new Clicker(document.querySelector('#c3'));
