// change api/ to https://data.cityofchicago.org/resource/dip3-ud6z.json
// api append something to Page

$(document).ready(function() {
   $.ajax(getWeather);  // object that has ajax keys and values
   initialize(); // MAP
}) // end of doc.ready

//////////////////////////////////////////////
// getWeather is ajax code to link api libraries
// 1. gets api libraries with ajax
// 2. prompts for community
// 3. loops thru array, if community match
// 4. appends data.adress of match
// 5. calls setMarker func. w/ lat,long of match
//    a. setMarker drops pins on map
var getWeather = {
   type: 'get',
   url: 'https://data.cityofchicago.org/resource/dip3-ud6z.json',
   // url: 'http://api.openweathermap.org/data/2.5/weather?id=5391997&appid=86f89dbf1e383cebc3baef57450b1084',
   // this deleted from end of url after "weather?id="(and replaced with san francisco id) &appid=2de143494c0b295cca9337e1e96b00e0  then the api from openweathermap.org pasted at end after "appid="

   //get ride of data: json and it works????
   // data: 'json',
   success: function(data) { //data from the api
      console.log('we did it.');
      console.dir(data);
      console.log(data[0].address);
      // $('.weather').append('<li>The city is called ' + data.name + ' and the current temp. is  ' + Math.round(data.main.temp * 9/5 - 459.67) + ' fahrenheit.</li>');
      //data.main.temp selects temp data obj/mainobj/temp attrib.

      // for loop array, append matches
      //if comm == data[i].community_area
         // append data[i]


      // get usrer community
      var community = prompt('Enter your community name to find libraries near you (Austin, Roseland, etc.)');
      community = community.toUpperCase();

      $('.weather').append('<h3>Libraries in ' + community + ':</h3>');
      // loop through arr or library objs and compare
      //commmnity for matches
      // if match, append "address" to .weather div
      for (var i = 0; i < data.length; i++) {
         if (community == data[i].community_area) {

            $('.weather').append('<li>' + data[i].address + '</li>');

   ////// // call setMarker ////////////////
            setMarker(data[i].latitude, data[i].longitude);

   //////////////////////////////////////

            //drop markers for libraries
         //    var marker = new google.maps.Marker({
         //       position: new google.maps.LatLng(data[i].latitude, data[i].longitude),
         //       map: map,
         //       animation: google.maps.Animation.DROP
         //   }) // end var marker
        }  // end if statement
      } // end for loopp

// WHY MARKERS WON'T DROP????  SCOPED TO FUNCTION INIT?
// SO CALL FUNCT IINIT???


   },
   error: function() {
      console.log('it didnt work');
   }
} // end getWeather object


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

  // var marker = new google.maps.Marker({
  //    position: new google.maps.LatLng(41.889793, -87.627270),
  //    map: map,
  //    animation: google.maps.Animation.DROP
 // }) // end marker
} // end initialize function

 function setMarker (lat, long) {
    console.log('test');
    var marker = new google.maps.Marker({
      position: new google.maps.LatLng(lat, long),
      map: map,
      animation: google.maps.Animation.DROP
  }) // end marker
 }
