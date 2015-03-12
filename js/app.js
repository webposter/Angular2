var myApp = angular.module('myApp', []);
myApp.controller('ExampleController', ['$scope', function ($scope) {
    $scope.update = function () {
        return {templateUrl: 'views/index.html'}
    };
}]);