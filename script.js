
function initMap() {
    
    var center = { lat: 40.7128, lng: -74.0060 }; 
    

    var map = new google.maps.Map(document.getElementById('map'), {
        center: center,
        zoom: 50 
    });
    var marker = new google.maps.Marker({
        position: center,
        map: map,
        title: 'Center of the map'
    });
}
