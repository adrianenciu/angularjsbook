function AuthController($scope) {
  $scope.authorized = true;
  $scope.toggle = function() {
    $scope.authorized = !$scope.authorized;
  };
}
