// api key openweathermap.org

$(document).ready(function() {

   $.ajax(getWeather);  // object that has ajax keys and values

}) // end of doc.ready



var getWeather = {
   type: 'get',
   url: 'http://api.openweathermap.org/data/2.5/weather?id=5391997&appid=86f89dbf1e383cebc3baef57450b1084',


   // this deleted from end of url after "weather?id="(and replaced with san francisco id) &appid=2de143494c0b295cca9337e1e96b00e0  then the api from openweathermap.org pasted at end after "appid="
   data: 'json',
   success: function(data) { //data from the api
      //
      console.log('we did it.');
      console.dir(data);
      $('.weather').append('<li>The city is called ' + data.name + ' and the current temp. is  ' + Math.round(data.main.temp * 9/5 - 459.67) + ' fahrenheit.</li>');
      //data.main.temp selects temp data obj/mainobj/temp attrib.

   },
   error: function() {
      console.log('it didnt work');
   }

} // end getWeather object
