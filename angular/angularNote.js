var nodeApp = angular.module('nodeApp', []);

nodeApp.controller('nodeCtrl', function ($scope) {
  $scope.buttons   = [];

  $scope.addButton = function() {
    $scope.buttons.push($scope.inputText);
  }

  $scope.remove = function(index) {
    $scope.buttons.splice(index,1);
  }
});
