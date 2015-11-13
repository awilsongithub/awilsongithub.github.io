$(document).ready(function() {
   initialize(); // MAP
}) // end of doc.ready


/////////map code///////////////////////
//++++++++++++++ will need call initialize
///++++++++++++can in initialize with parameters of new Lat.Lng?????? each time change states?
///////map constructor ////////////////
var mapCanvas, mapOptions, map;
function initialize() {
  mapCanvas = document.getElementById('map-canvas');
  // +++++++++++++need put this elem in html
  mapOptions = {
      center: new google.maps.LatLng(41.931929, -87.698327),
      zoom: 10,
      mapTypeId: google.maps.MapTypeId.ROADMAP
   } // end options

 //instantiate map constructor w/ two args
 // mapCanvas and mapOptions
  map = new google.maps.Map(mapCanvas, mapOptions);


  //////////////////////////////////////

  function setMarker (lat, long) {
     console.log('test');
     var marker = new google.maps.Marker({
       position: new google.maps.LatLng(lat, long),
       map: map,
       animation: google.maps.Animation.DROP
   }) // end marker
  }
  ///////////////////////////////////////////////
  // call setMarker
  // from within .click code block
 setMarker(data[i].latitude, data[i].longitude);
 ////////////////////////////////////////////////
