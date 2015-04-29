angular.module('menu-button', [])
    .directive('menuButton', function(){
        return {
        restrict: 'E',
        scope: {
            fn: '='
        },
        controller: 'menuButtonController',
        templateUrl: 'patterns/menu-button/_menu-button.html'
    };
})

    .controller('menuButtonController', function($scope, $element) {
        $scope.closed = false;
        $scope.toggle = function() {
            $scope.closed = !$scope.closed;
            $scope.fn();
        };
    });