function EscapeController($scope, $element) {
  $scope.message = "";
  $element.bind("keyup", function(event) {
    if (event.keyCode == 27) {
      $scope.$apply(function() {
        $scope.message = "";
      });
    }
  });
}
