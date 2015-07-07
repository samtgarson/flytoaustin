angular.module('place', [])
    .controller('placeController', function($scope, markers, $stateParams, map, dataLayer, $timeout) {
        $scope.title = $stateParams.name;
        markers.cherrypick($scope.title);
        $scope.place = markers.working[$scope.title];

        $timeout(function(){
            var all = dataLayer._layers;
            for (var i in all) {
                if (all[i].options.title == $scope.title) {
                    all[i].openPopup();
                    break;
                }
            }
        }, 200);    

        map.setView(L.latLng($scope.place.lat, $scope.place.lon), 16);

        $scope.$on('$stateChangeStart', markers.reset);
    });