angular.module('geo', []) 
    .service('geodata', function(){
        return {
        'JW Marriott Austin': {
            lon: -97.744044,
            lat: 30.264294,
            type: "lodging",
            copy: "This 1,012-room convention-style hotel will be located on Congress Avenue between 2nd and 3rd Streets. Located just two blocks from the Austin Convention Center, the high-end hotel includes a full-service “regional” Italian restaurant and a specialty restaurant featuring local, Texas cuisine in addition to a Starbucks and additional hotel bars.",
            gallery: [
                'build/img/hotelimg_1.png',
                'build/img/hotelimg_2.png',
                'build/img/hotelimg_3.png'
            ], leadImage: 'build/img/hotelimg_2.png',
            url: 'http://www.jwmarriottaustin.com/'
        }, 'Hotel Van Zandt': {
            lon: -97.738831,
            lat: 30.260244,
            type: "lodging"
        }, "Westin Austin Downtown": {
            lon: -97.740751,
            lat: 30.266462,
            type: "lodging"
        }, "Bat Fest": {
            lon: -97.745056,
            lat: 30.262144,
            type: "pitch",
            description: "Celebrate this batty event as the world’s largest urban bat colony take to the skies for their nightly flight."
        }, "ATX Television Festival": {
            lon: -97.744783,
            lat: 30.262709,
            type: "pitch"
        }, "Austin City Limits Music Festival": {
            lon: -97.772859,
            lat: 30.266962,
            type: "pitch"
        }};
    });