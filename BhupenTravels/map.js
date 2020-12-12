
// Initializing map
function initMap() {

    // Location of places in Agra
    const agra= [
        {name: 'agra', lat: 27.1766701, lng:78.0080745 },
        {name: 'Fathehabad', lat: 27.160002, lng:78.053331 },
        {name: 'Gattiman Train Tour', lat: 27.160102, lng:78.052593 }
    ];
    // Location of places in Goa
    const goa = [
        {name: 'Goa', lat: 15.2993265, lng:74.12399600000003 },
        {name: 'Goa Beatch Hotel', lat: 15.559112, lng:73.756646 },
        {name: 'Rumbrem', lat: 15.299327, lng: 74.123996}
    ];
    // Location of places in Manali
    const manali = [
        {name: 'Manali', lat: 32.2396325, lng:77.18871450000006 },
        {name: 'India post manali', lat: 32.24382, lng: 77.188316},
        {name: 'Manali post market', lat: 32.243306, lng:77.189335 }
    ];
    // Location of places in Hyderabad
    const hyderabad = [
         {name: 'Hyderabad', lat:17.385044 , lng:78.486671 },
        {name: 'Charminar', lat:17.354043 , lng:78.477059 },
        {name: 'Golkonda', lat:17.38 , lng:78.4 }
    ];
    // Location of places in Mumbai
    const mumbai = [
        {name: 'mumbai', lat:19.0759837 , lng: 72.8776559},
        {name: 'mumbai central', lat: 18.969025, lng:72.820529 },
        {name: 'Mumbai airport', lat: 19.0901765, lng:72.86873909999997 }
    ];
    // Location of places in Newdelhi
    const newdelhi = [
        {name: 'Newdelhi', lat:28.6139391 , lng: 77.2090212},
        {name: 'newdelhi railway station', lat: 28.644512, lng:77.221535 },
        {name: "red fort", lat: 28.656159, lng:77.24102 }
    ];
   
    
    

    // Map centered on hotels in each city
    var mapAgra = new google.maps.Map(document.getElementById('map-agra'), {zoom: 13, center: agra[0]});
    var mapGoa = new google.maps.Map(document.getElementById('map-goa'), {zoom: 13, center: goa[0]});
    var mapManali = new google.maps.Map(document.getElementById('map-manali'), {zoom: 13, center: manali[0]});
    var mapHyderabad = new google.maps.Map(document.getElementById('map-hyderabad'), {zoom: 13, center: hyderabad[0]});
    var mapMumbai = new google.maps.Map(document.getElementById('map-mumbai'), {zoom: 13, center: mumbai[0]});
    var mapNewdelhi = new google.maps.Map(document.getElementById('map-newdelhi'), {zoom: 13, center: newdelhi[0]});

    function mapMarkers(city, map) {
        for(var i = 0; i < city.length; i++){
            var pins = city[i];
            var marker = new google.maps.Marker({
            position: pins,
            map: map,
            animation: google.maps.Animation.DROP,
            title: pins.name
            });
        }
    }
    
        
    mapMarkers(agra, mapAgra);
    mapMarkers(goa, mapGoa);
    mapMarkers(manali, mapManali);
    mapMarkers(hyderabad, mapHyderabad);
    mapMarkers(mumbai, mapMumbai);
    mapMarkers(newdelhi, mapNewdelhi);

}