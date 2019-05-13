function MainController($scope) {
  $scope.name = 'Seb',
  $scope.email = 'seb@email.com',
  $scope.phone = 07717895
}

angular
  .module('app')
  .controller('MainController', MainController);
