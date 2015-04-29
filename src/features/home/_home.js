angular.module('home', [])
    .controller('homeController', function($scope, map) {
        map.setView(L.latLng(30.261, -97.744044), 14)       
        // map.setZoom(14);
    });