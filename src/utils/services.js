angular.module('services', []) 
    .service('map', function(){
        var map = L.mapbox.map('map', 'samtgarson.m1ngeboo');
        return map;
    })
    .service('dataLayer', function(map) {
        var dataLayer = L.mapbox.featureLayer().addTo(map);
        return dataLayer;
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
            var temp = angular.copy(service.working);
            for (var i=0, counter=1; i<temp.length; i++) {
                if (temp[i].type == type) {
                    temp[i].type = counter.toString();
                    counter ++;
                } else {
                    temp[i].colour = "#fff";
                }
            }
            service.working = temp;
        };

        return service;
    });