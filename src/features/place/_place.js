angular.module('place', [])
    .controller('placeController', function($scope, markers, $stateParams, map) {
        $scope.title = $stateParams.name;
        $scope.place = markers.working[$scope.title];

        map.setView(L.latLng($scope.place.lat, $scope.place.lon), 16);
    });