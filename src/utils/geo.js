angular.module('geo', []) 
    .service('geodata', function(){
        return [{
            lon: -97.744044,
            lat: 30.264294,
            name: 'JW Marriott Austin',
            type: "lodging"
        }, {
            lon: -97.738831,
            lat: 30.260244,
            name: 'Hotel Van Zandt',
            type: "lodging"
        }, {
            lon: -97.740751,
            lat: 30.266462,
            name: "Westin Austin Downtown",
            type: "lodging"
        }, {
            lon: -97.745056,
            lat: 30.262144,
            name: "Bat Fest",
            type: "pitch",
            description: "Celebrate this batty event as the world’s largest urban bat colony take to the skies for their nightly flight."
        }, {
            lon: -97.744783,
            lat: 30.262709,
            name: "ATX Television Festival",
            type: "pitch"
        }, {
            lon: -97.772859,
            lat: 30.266962,
            name: "Austin City Limits Music Festival",
            type: "pitch"
        }];
    });