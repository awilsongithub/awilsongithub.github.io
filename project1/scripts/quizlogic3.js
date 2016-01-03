////////////////////////////////////////
//        TO DO LIST: see trello      //
////////////////////////////////////////

/////////////////////////////////////////////////
// DOM element variables
// var ui = {}; // object to hold dom variables
// ++++++++++++++ put vars and arrays below in ui object w/ ui.varName
// var quizArea = $('.quizArea');
var quizBackground = $('.quizBackground');
var img = $('img')
var imageLocation = $('#imageLocation');
var p = $('p'); // paragraph text
var nameListString = 'Hello ';
var inc; // to go thru families
var i; // to go thru members of families
///////////////////////////////////////
//  replacing arrays with objects    //
//   to bundle values by family      //
///////////////////////////////////////
var families = [];
families[0] = {
   objectName: 'grandParents',
   city: 'Dayton',
   state: 'Ohio',
   lat: 39.74354,
   long: -84.07497,
   names: ['Howard', 'Kathy'],
   images: ['<img id="howard" src="images/howard.jpg" />', '<img id="kathy" src="images/kathy.jpg" />']
   // streetView: 'https://www.google.com/maps/@39.7437098,-84.0753218,3a,75y,126.99h,80.3t/data=!3m6!1e1!3m4!1s7f6_BUyGt0IJeEy92jF1eA!2e0!7i13312!8i6656!6m1!1e1'
};
families[1] = {
   objectName: 'Renee',
   city: 'Chicago',
   state: 'Illinois',
   lat: 41.86704,
   long: -87.62465,
   names: ['Renee', 'Adam'],
   images: ['<img src="images/renee.jpg" />', '<img src="images/adam.jpg" />']
   // streetView: 'https://www.google.com/maps/@39.7437098,-84.0753218,3a,75y,126.99h,80.3t/data=!3m6!1e1!3m4!1s7f6_BUyGt0IJeEy92jF1eA!2e0!7i13312!8i6656!6m1!1e1'
};
families[2] = {
   objectName: 'Gary',
   city: 'Louisville',
   state: 'Kentucky',
   lat: 38.25266,
   long: -85.75846,
   names: ['Anne', 'Bill', 'Cole', 'Grayson'],
   images: ['<img src="images/renee.jpg" />', '<img src="images/adam.jpg" />', '<img src="images/renee.jpg" />', '<img src="images/adam.jpg" />']
   // streetView: 'https://www.google.com/maps/@39.7437098,-84.0753218,3a,75y,126.99h,80.3t/data=!3m6!1e1!3m4!1s7f6_BUyGt0IJeEy92jF1eA!2e0!7i13312!8i6656!6m1!1e1'
};
families[3] = {
   objectName: 'Anne',
   city: 'Louisville',
   state: 'Kentucky',
   lat: 38.25266,
   long: -85.75846,
   names: ['Anne', 'Bill', 'Cole', 'Grayson'],
   images: ['<img src="images/renee.jpg" />', '<img src="images/adam.jpg" />', '<img src="images/renee.jpg" />', '<img src="images/adam.jpg" />']
   // streetView: 'https://www.google.com/maps/@39.7437098,-84.0753218,3a,75y,126.99h,80.3t/data=!3m6!1e1!3m4!1s7f6_BUyGt0IJeEy92jF1eA!2e0!7i13312!8i6656!6m1!1e1'
};
families[4] = {
   objectName: 'Doug',
   city: 'Louisville',
   state: 'Kentucky',
   lat: 38.25266,
   long: -85.75846,
   names: ['Anne', 'Bill', 'Cole', 'Grayson'],
   images: ['<img src="images/renee.jpg" />', '<img src="images/adam.jpg" />', '<img src="images/renee.jpg" />', '<img src="images/adam.jpg" />']
   // streetView: 'https://www.google.com/maps/@39.7437098,-84.0753218,3a,75y,126.99h,80.3t/data=!3m6!1e1!3m4!1s7f6_BUyGt0IJeEy92jF1eA!2e0!7i13312!8i6656!6m1!1e1'
};




/////////////////////////////////////////////////
// declare arrays
// var names = ['Kathy', 'Howard', 'Renee', 'Adam'];
// var cities = ['Dayton', 'Chicago'];
// var states = ['Ohio', 'Illinois'];
// var locationCoordinates = {
//    daytonLat: '39.742255',
//    daytonLong: '-84.075316',
//    southLoopLat: '41.86704',
//    SouthLoopLong: '-87.62465'
// }
// var images = [, , '<img src="images/renee.jpg" />', '<img src="images/adam.jpg" />'];


 //////////////////////////////////////////////
 //                doc ready :               //
 //             where action happens         //
 // PUT ALL FUNCTION CALLS AND INSTANTIATION //
 // INSIDE OF DOCUMENT. READY TO BE SURE ALL //
 // DOM ELEMENTS ETC THEY NEED ARE LOADED    //
 // BEFORE THEY RUN !!! ///////////////////////

 $(document).ready ( function() {
      var inc = 0; // common incrementor
      // initMap with first family in array coordinates
      // initMap(families[inc].lat, families[inc].long, 8); // didn't work
      initialize(); // initalize map

      // hide images on load
      $('img').hide();




   /////////button action calls function/////////
    $('button').click ( function () {

      $('.quizBackground').empty(); // empty all appended text for blank slate
      // p.remove(); // remove previous text

      /////////////////////////////////////////////
      // for loop iterates thru array of family objs
      /////////////////////////////////////////////
      for (var inc = 0; inc < families.length; inc++) {



         //we found inc (0,1,2..) families. want find more?
         prompt('we\'ve found ' + inc + 'families. Want to find more?');
         // replace prompt with form........


         // welcome to city of current family
         quizBackground.append('<p>Welcome to ' + families[inc].city + ', ' + families[inc].state + '. Want to find some family here?</p>');

         // break in flow with a prompt to proceed
         prompt(' ');

         // call function to build family name list and append it and images
         buildNameList(inc);
         setMarker(families[inc].lat, families[inc].long);

         //moved here from build name list. works? or move back?
         quizBackground.append(nameListString);
         $('#howard').show('slow');
         playSuccessSound();

         inc++;  //

         quizBackground.append('<p>Click Find Family button to Find More Family!</p>');
         prompt('press enter to proceed to next family');

      } // end family for loop

         // took this out
         // "win game" message once "found" all families
         // quizBackground.append('<p>The Family\'s All Here!</p>');

         // initMap(41.931929, -87.698327, 4); // didn't work

  }) // end button click function

 } ); // end of doc.ready


 ///////////////////////////////////////////////////////
 //               FUNCTIONS TO CALL                   //
 ///////////////////////////////////////////////////////

 // build string to greet each family member using loop
 // loop also appends imgages
 function buildNameList(inc) {
    nameListString = 'Hello ';
    for (var i = 0; i < families[inc].names.length; i++) {

          var length = families[inc].names.length;
          // if else for punctuation
          //images
          if (i === 0) {
             nameListString += families[inc].names[i];
          }
          else if (i === length - 1) {
             nameListString += (' and ' + families[inc].names[i] + '.');
          } else {
             nameListString += (', ' + families[inc].names[i]);
          }








         // call function to show image with inc and i args
         // showImage(inc, i);



    } // end for loop

    //append string that greets each family member

 }; // end buildNameList


// select and show image function
function showImage(inc, i) {
   // build selector to show individual images
   // peoples name in all lowercase is also the id of each image
   var shownImageId = families[inc].names[i].toLowerCase();
   var imageJQuerySelector = " '#" + shownImageId + "'";
   console.log(imageJQuerySelector);
   // show image of name
   $(imageJQuerySelector).show('slow');


   // for html

   // for script



}; // end showImage

// play media when called
var playSuccessSound = function () {
  document.getElementById("successSound").play();
};

// map code from chicago.js
 var mapCanvas, mapOptions, map;
 function initialize() {
   mapCanvas = document.getElementById('map-canvas');
   mapOptions = {
       center: new google.maps.LatLng(39.74354, -84.07497),
       zoom: 4,
       mapTypeId: google.maps.MapTypeId.ROADMAP
    } // end options

  //the map object constructor takes two arguments
  // mapCanvas and mapOptions
   map = new google.maps.Map(mapCanvas, mapOptions);
} // end initialize function



// setMarker function takes two coordinate arguments
 function setMarker(lat, long) {
    console.log('test');
    console.log(lat, long);
    // marker is a method with an obj argument?
    var marker = new google.maps.Marker ( {
      position: new google.maps.LatLng(lat, long),
      map: map,
      animation: google.maps.Animation.DROP
  }) // end marker
 } // end setMarker













 // // i broke this...//////////////////////
 // // map global variables
 // var mapCanvas, mapOptions, map;
 //
 // // map initialize function with 3 parameters
 // function initMap() {
 //   mapCanvas = document.getElementById ('map-canvas');
 //   mapOptions = {
 //       center: new google.maps.LatLng(39.74354, -84.07497),
 //       zoom: 4,
 //       mapTypeId: google.maps.MapTypeId.HYBRID
 //    } // end options
 // } // end initMap
 //
 // // map object constructor (initMap) takes two arguments
 // map = new google.maps.Map(mapCanvas, mapOptions);


//////////////////////////////////////////
//       RECYCLE BIN UNUSED CODE        //
//////////////////////////////////////////

// CENTER MAP AND SETMARKER AT FAMILY[INC] COORDINATES
// initMap(families[inc].lat, families[inc].long, 8);
// setMarker(families[inc].lat, families[inc].long);



 // if ( nameGuess.toLocaleLowerCase() == (
//    families[inc].name1.toLocaleLowerCase()  ||
//    families[inc].name2.toLocaleLowerCase()  || families[inc].child1.toLocaleLowerCase() || families[inc].child2.toLocaleLowerCase() || families[inc].child3.toLocaleLowerCase()
//    )

// )  {
//    quizBackground.append('<p>Yes! ' + nameGuess + ' lives in ' + families[inc].city + '.</p>');
//    imageLocation.append(families[inc].image1);
//
// } else if (nameGuess.toLocaleLowerCase() == names[inc + 1].toLocaleLowerCase()) {
//    quizBackground.append('<p>Yes! ' + names[inc + 1] + ' lives in ' + cities[inc] + '.</p>');
//    imageLocation.append(images[inc + 1]); // add their img
// }
// var nameGuess = prompt('Who ELSE lives in ' + cities[inc] + '? (type name)');
// if (nameGuess.toLocaleLowerCase() == names[inc].toLocaleLowerCase()) {
//    quizBackground.append('<p>Yes! ' + names[inc] + '  lives in ' + cities[inc] + '.</p>');
//    imageLocation.append(images[inc]); // add their img
//    inc++;
// } else if (nameGuess.toLocaleLowerCase() == names[inc + 1].toLocaleLowerCase()) {
//    quizBackground.append('<p>Yes! ' + names[inc + 1] + ' lives in ' + cities[inc] + '.</p>');
//    imageLocation.append(images[inc + 1]); // add their img
//    inc++;
// }




///this Wed Afternoon Map code commmented out temporarily...//
// ++++++++ add back in?????? ++++++++++

// var myLatLng = {lat: -25.363, lng: 131.044}; // location object
// ///******************************************///
// //       new map code from google api help    //
// ///******************************************///
// function initMap(lat, lng) {
//    // var myLatLng = {latitude, longitude};
//
//   var map = new google.maps.Map(document.getElementById('map-canvas'), {
//     zoom: 4,
//     center: (latitude, longitude)
//   });
//
//   var marker = new google.maps.Marker({
//     position: (latitude, longitude),
//     map: map,
//     title: 'Hello World!'
//   });
// } // end initMap





///******************************************///
//        map code below commented out        //
///******************************************///

//
// /////////map code///////////////////////////
// // initMap has been called up in doc.ready
// ///++++++++++++can in initMap with parameters of new Lat.Lng?????? each time change states?
// ///////map constructor /////////////////////
// // declare variables for initMap
// var mapCanvas, mapOptions, map;
// //initMap map
// function initMap() {
//   mapCanvas = document.getElementById('map-canvas');
//   mapOptions = {
//       center: new google.maps.LatLng(41.931929, -87.698327),
//       zoom: 4,
//       mapTypeId: google.maps.MapTypeId.ROADMAP
//    };// end options
//
// // +++++++tesing adding this w preset coord into initMap
//    var marker = new google.maps.Marker({
//      position: new google.maps.LatLng(41.931929, -87.698327),
//      map: map,
//      animation: google.maps.Animation.DROP
// }) // end var marker =
//
//    //instantiate map constructor w/ two args
//    // mapCanvas and mapOptions (dom selector, map ctr, zm, id)
//    var map = new google.maps.Map(mapCanvas, mapOptions);
//
// } // end initMap
// ///////////////////////////////////////////////
//
// //////////////////////////////////////////////
// function setMarker(lat, long) {
//      console.log('test');
//      // marker object has keys: position, map, animation
//      // position value takes 2 args:lat, long
//      var marker = new google.maps.Marker({
//        position: new google.maps.LatLng(lat, long),
//        map: map, // map is a variable set above w options & canvas
//        animation: google.maps.Animation.DROP
//    }) // end var marker =
// } // end setMarker
// ////////////////////////////////////////////////
