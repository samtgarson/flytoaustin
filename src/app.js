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
    
    // Patterns
    'menu-button'
])

    .run(function() {
        // Set public access token
        L.mapbox.accessToken = 'pk.eyJ1Ijoic2FtdGdhcnNvbiIsImEiOiJuaG9HVmhBIn0.mlEpqJgh4q-smi8J2w0wjg';
    })

    .controller('appController', function ($scope, map, markers, $timeout, dataLayer) {
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

        $scope.$watch(function() {
            return markers.working;
        }, markers.update);

        markers.update();

        $scope.drawerOpen = false;
        $scope.toggleDrawer = function () {
            $scope.drawerOpen = !$scope.drawerOpen;
        }

    });

