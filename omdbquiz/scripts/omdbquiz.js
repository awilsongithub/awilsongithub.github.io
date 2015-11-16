////////////////////////////////////////
//        TO DO LIST                  //
////////////////////////////////////////

// form button clock calls yourMovie and /
// yourMovie returns the value from form text field
// but...... ajax call url cannot get var from function
// it can only get var and use it successufully if i
// hard code string value into var ie 'star wars'....




//////////////////////////////////////////////
//                doc ready :               //
// PUT ALL FUNCTION CALLS AND INSTANTIATION //
// in it TO BE SURE dom loaded before run   //
//////////////////////////////////////////////
$(document).ready(function() {
   // $.ajax(getOmdb('blade+runner');  // object that has ajax keys and values
   $('#clues').empty();

}) // end of doc.ready ///////////////////////

/////////////////////////////////////////////////
// DOM element variables
// var ui = {}; // object to hold dom variables ++++ put vars and arrays below in ui object w/ ui.varName
var quizBackground = $('.quizBackground');
var p = $('p'); // paragraph text

// var yourMovieTitle; // form input i

////////////////////////////////////////
//        ajax api request            //
////////////////////////////////////////

// relevant clue keys: Title, Year, Rated, Genre, Director, Actors, Plot, Awards, Poster (url of poster), Metascore

//passes title to ajax call

// process form input > variable for

// var yourMovieTitle = 'star wars';

var yourMovieTitle = 'star wars';

function yourMovie() {

   yourMovieTitle = $(movieNameInput).value;
   console.log(yourMovieTitle + 'from yourMovie() fun.');
   // document.write('your movie title is ' + yourMovieTitle);
}


// var form = document.getElementById('movieNameForm');
// var movieName = form.elements.movieName.value;
// console.log('hello');


// $('getInfo').onclick = function() {
//    var userInput = 'blade runner';
//    console.log(userInput);
// };

$.ajax({
    url: 'http://www.omdbapi.com/?t=' + yourMovieTitle + '&y=&plot=short&r=json',
    type: "GET",
    dataType: 'json',
    success: function(data) {
      console.log(yourMovieTitle + 'from inside ajax call.');
        $('#clues').append(data.Title + " was released in " + data.Year + " and stars " + data.Actors);
      //   $('body').css('background-image:', 'url(data.Poster)');
    }
});



/////////button action calls function/////////
 $('#emptyText').click ( function () {
   // inc++;  // // do i need this?
   // empty all appended text for blank slate
   $('#clues').empty();
   // remove previous text
   // p.remove();
}) // end button click function ///////////////
