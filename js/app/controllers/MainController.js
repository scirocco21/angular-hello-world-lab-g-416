function MainController($scope) {
  $scope.name = 'Seb',
  $scope.email = 'seb@email.com',
  phone = 07717895
}

angular
  .module('app')
  .controller('MainController', MainController);
