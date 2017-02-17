function ItemsController($scope) {
  $scope.items = [
    {name: "Item 1", price: 1.99},
    {name: "Item 2", price: 2.99}
  ];

  $scope.nestedItems = [
    {
      name: "Item 1",
      items: [
        {name: "Nested item 1.1"},
        {name: "Nested item 1.2"}
      ]
    },
    {
      name: "Item 2",
      items: [
        {name: "Nested item 2.1"},
        {name: "Nested item 2.2"}
      ]
    }
  ];

  $scope.otherItems = [
    {name: "Item 1"},
    {name: "Item 2"},
    {name: "Item 3"},
    {name: "Item 4"}
  ];

  $scope.destroy = function(item) {
    var index = $scope.otherItems.indexOf(item);
    $scope.otherItems.splice(index, 1);
  }
}
