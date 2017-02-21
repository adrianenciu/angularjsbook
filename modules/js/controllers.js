var app = angular.module("app");
app.value("score", {points: 0});
app.value("randomScore", function() {
  return Math.ceil(Math.random() * 10);
});

app.controller("MessageController", function($scope) {
  $scope.message = "This is a model";
});

app.controller("AnotherMessageController", function($scope) {
  $scope.message = "This is another model"
});

app.controller("LocaleController", ["$scope", "$locale", function(s, l) {
  s.locale = l.id;
}]);

app.controller("ScoreController", function($scope, score, randomScore) {
  $scope.score = score;
  $scope.increment = function() {
    $scope.score.points += randomScore();
  }
});
