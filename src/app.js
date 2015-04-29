angular.module('app', [
    // App
    'ui.router',
    'templates',
    'breakpointApp',
    'ct.ui.router.extras',
    'ngAnimate',
    'ngSanitize',
    'states',
    'services',
    'geo',

    // Features
    'home',
    'place',
    
    // Patterns
    'menu-button'
])

    .run(function() {
        // Set public access token
        L.mapbox.accessToken = 'pk.eyJ1Ijoic2FtdGdhcnNvbiIsImEiOiJuaG9HVmhBIn0.mlEpqJgh4q-smi8J2w0wjg';
    })

    .controller('appController', function ($scope, map, markers, $timeout, dataLayer, $state) {
        var $this = this;
        
        //Remove zoom control
        map.zoomControl.removeFrom(map);

        // Disable zooming
        map.touchZoom.disable();
        map.doubleClickZoom.disable();
        map.scrollWheelZoom.disable();

        dataLayer.on('mouseover', function(e) {
            e.layer.openPopup();
        });
        dataLayer.on('mouseout', function(e) {
            e.layer.closePopup();
        });

        $scope.state = 'home'
        $scope.$watch(function() {
            return $state.current.name;
        }, function(newVal, oldVal) {$scope.state = newVal;});

        dataLayer.on('click', function(e) {
            $state.go('place', {'name': e.layer.feature.properties.title});
        });

        $scope.$watch(function() {
            return markers.working;
        }, markers.update);

        markers.update();

        $scope.drawerOpen = false;
        $scope.toggleDrawer = function () {
            $scope.drawerOpen = !$scope.drawerOpen;
        }

    });

