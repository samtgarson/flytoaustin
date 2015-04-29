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
    'home'
    
    // Patterns
])

    .run(function() {
        // Set public access token
        L.mapbox.accessToken = 'pk.eyJ1Ijoic2FtdGdhcnNvbiIsImEiOiJuaG9HVmhBIn0.mlEpqJgh4q-smi8J2w0wjg';
    })

    .controller('appController', function ($scope, map, markers, $timeout) {
        var $this = this;
        
        //Remove zoom control
        map.zoomControl.removeFrom(map);

        // Disable zooming
        map.touchZoom.disable();
        map.doubleClickZoom.disable();
        map.scrollWheelZoom.disable();

        $scope.$watch(function() {
            return markers.working;
        }, markers.update);

        markers.update();

    });

