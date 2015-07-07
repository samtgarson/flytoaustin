angular.module('services', []) 
    .service('map', function(){
        var map = L.mapbox.map('map', 'samtgarson.m1ngeboo');
        return map;
    })
    .service('dataLayer', function(map) {
        var dataLayer = L.mapbox.featureLayer().addTo(map);
        return dataLayer;
    })
    .service('mapResolve', function(dataLayer, $q) {
        var isReady = $q.defer();
        // isReady.resolve(true);
        dataLayer.on('ready', function() {
            console.log('dataReady!');
            isReady.resolve(true);
        });

        return isReady.promise;
    })
    .service ('markers', function (map, dataLayer, geodata) {

        var service = {};

        service.orig =  geodata;

        service.working = angular.copy(service.orig);   



        service.update = function(data, oldData) {
            if (!data) data = service.working;
            var geojson = { type: 'FeatureCollection', features: [] }, names = Object.keys(data), cur;
            // For each table row, create a marker.
            for (var i = 0; i < names.length; i++) {
                cur = data[names[i]];
                // Blank rows shouldn't be included - they're easy to detect and skip.
                if (cur.lon === null || cur.lat === null) continue;
                geojson.features.push({
                    type: 'Feature',
                    geometry: {
                        type: 'Point',
                        coordinates: [ cur.lon, cur.lat]
                    },
                    properties: {
                        'marker-size': 'large',
                        'marker-color': cur.colour?cur.colour:'#1D4C79',
                        'marker-symbol': cur.type,
                        'title': names[i],
                        'description': cur.description?cur.description:''
                    }
                });
            }
            dataLayer.setGeoJSON(geojson);
        };

        

        service.reset = function() {
            service.working = angular.copy(service.orig);            
        };

        service.filter = function(type) {
            service.reset();
            var temp = angular.copy(service.working),
                names = Object.keys(temp), cur;
            for (var i=0, counter=1; i<names.length; i++) {
                cur = temp[names[i]];
                if (cur.type == type) {
                    cur.type = counter.toString();
                    counter ++;
                } else {
                    cur.colour = "#fff";
                }
            }
            service.working = temp;
        };

        service.cherrypick = function(name) {
            service.reset();
            var temp = angular.copy(service.working),
                names = Object.keys(temp), cur;
            for (var i=0, counter=1; i<names.length; i++) {
                cur = temp[names[i]];
                if (names[i] != name) {
                    cur.colour = "#fff";
                }
            }
            service.working = temp;
        };

        return service;
    });