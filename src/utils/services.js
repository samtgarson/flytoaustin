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
            var geojson = { type: 'FeatureCollection', features: [] };
            // For each table row, create a marker.
            for (var i = 0; i < data.length; i++) {
            // Blank rows shouldn't be included - they're easy to detect and skip.
                if (data[i].lon === null || data[i].lat === null) continue;
                geojson.features.push({
                    type: 'Feature',
                    geometry: {
                        type: 'Point',
                        coordinates: [ data[i].lon, data[i].lat]
                    },
                    properties: {
                        'marker-size': 'large',
                        'marker-color': data[i].colour?data[i].colour:'#1D4C79',
                        'marker-symbol': data[i].type,
                        'title': data[i].name,
                        'description': data[i].description?data[i].description:''
                    }
                });
            }
            dataLayer.setGeoJSON(geojson);
            map.fitBounds(dataLayer.getBounds());
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