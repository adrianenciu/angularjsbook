function AdditionController($scope) {
  $scope.operand1 = 0;
  $scope.operand2 = 0;
  $scope.add = function() {
    return $scope.operand1 + $scope.operand2;
  }
  $scope.options = [0, 1, 2, 3, 4];

  $scope.number = 2;
  $scope.add2 = function(operand1, operand2) {
    return operand1 + operand2;
  }
}
