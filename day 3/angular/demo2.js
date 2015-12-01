var app = angular.module('myapp', []);
app.controller('main', MainCtrl);

function MainCtrl() {
  var vm = this;
  vm.seconds = 0;
  vm.minutes = 0;
  vm.hours = 0;

  vm.secondsChanged = function() {
    vm.minutes = vm.seconds / 60;
    vm.hours   = vm.minutes / 60;
  };

  vm.minutesChanged = function() {
    vm.seconds = vm.minutes * 60;
    vm.hours   = vm.minutes / 60;
  };

  vm.hoursChanged = function() {
    vm.seconds = vm.hours * 3600;
    vm.minutes = vm.hours * 60;
  };
}

