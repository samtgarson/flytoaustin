angular.module('filter', [])
    .controller('filterController', function($scope, map, markers, $stateParams, dataLayer) {
        map.fitBounds(dataLayer.getBounds());
        var type = {
            'hotel': 'lodging', 
            'restaurant': 'restaurant', 
            'event': 'pitch'
        }[$stateParams.type];

        markers.filter(type);

        $scope.list = [];
        var names = Object.keys(markers.working);
        for (var cur, i=0; i<names.length; i++) {
            cur = markers.orig[names[i]];
            if (cur.type == type) {
                cur.title = names[i];
                cur.number = parseInt(markers.working[names[i]].type);
                $scope.list.push(cur);
            }
        }

        $scope.$on('$stateChangeStart', markers.reset);
    });