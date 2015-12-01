var app = angular.module('myapp', []);
app.controller('main', MainCtrl);

function MainCtrl() {
  var vm = this;
  vm.counter =0;
  vm.name = "ynon";

  vm.click = function() {
    vm.counter++;
  };
}

