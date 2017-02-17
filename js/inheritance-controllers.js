function InfoController($scope) {
  $scope.info = {"name" : "INFO"};
}

function InfoChildController($scope) {
  $scope.info.childName = "INFO-CHILD";
}
