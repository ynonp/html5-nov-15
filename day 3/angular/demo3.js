var app = angular.module('myapp', []);
app.controller('main', MainCtrl);
app.controller('textareaCtrl', TextareaCtrl);

app.directive('myTextarea', MyTextarea);

function MainCtrl() {
  var vm = this;
}

function TextareaCtrl() {
  var vm = this;
  vm.text = 'initial text';
}

function MyTextarea() {
  return {
    scope: {},
    templateUrl: 't-textarea',
    controller: 'textareaCtrl',
    controllerAs: 'vm',
  };
}

