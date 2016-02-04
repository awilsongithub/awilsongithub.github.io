
//////////////////////////////////////////////////////////////////
/*                     JAVASCRIPT CHEAT SHEET                   */
//////////////////////////////////////////////////////////////////

/*
Common to explain code file here at top
Refer to this when solving problems with Javascript
Taken from stuy of Treehouse and WDI prework JS
*/

/*
MISCELANEOUS TIPS
DEVELOPER.MOZILLA.ORG: TREEHOUSE likes this resource
WORKSPACES WON'T PREVIEW IN SAFARI, USE CHROME
DEBUG JS IN CONSOLE OF INSPECT ELEMENT (LISTS SYNTAX ERORRS BY LINE)
--
--.....
*/


//////////////////////////////////////////////////////////////////
/*              TREEHOUSE RAILS TRACK JS NOTES                  */
//////////////////////////////////////////////////////////////////

//CONSOLE COMMANDS
clear(),

<script src="scripts.js"></script>//LINK TO Js: SCRIPT SRC LINK BEFORE CLOSING BODY TAG OR IN HEAD

// THESE ARE STATEMENTS ///////////////////////////
alert("Hello");
document.write("<h1>Welcome!</h1>");
console.log("program complete."); // CONSOLE TO FIX STUFF: MAC CMD+OPTION+J

//Treehouse "Storing and Tracking Info with Variables"
//SYNTAX///////////////////////////////////////////
var message = "<p>Hello!</p>"; // _ , $ = ok in a variable name. \TO IGNORE ' OR "
alert(message); // use UNDERSCORES OR CAMEL CASE...WHITESPACE IGNORED


//CAPTURING VISITOR INPUT///////////////////////////////////////////
var visitor = prompt('What is your name?'); //parse prompt inputs if need #, as always return a string
var message = 'Hello ' + visitor;
message += "! We're so glad you came by to visit.";
document.write(message);
if (inputString.toUpperCase() === 'RUBY') //controls for user input case discrepancies



console.log(fName.length); // .LENGTH IS A "PROPERTY" & toLowerCase() is a "method" OF a string object
console.log(passphrase.toLowerCase()); //RETURNS LOWERCASE WITHOUT ALTERING VAR VALUE

//Treehouse: "Working with Numbers" ///////////////////////////////////////////
Math.round(44.9); //= nearest # = 45 .... object methods.
Math.floor( Math.random() * 6 ) +1 //dieRoll ... Math.random generates between 0 - .99999
userNumOne = parseInt(userNumOne); //update value of variable from strings to integers //parseInt(), parseFloat() both chop off non #'s at end of line
// example: var totalWidth = parseInt(width) * numOfDivs;

// "program defensively" w/ control code like this:
if ( isNaN(numOne) || isNaN(numTwo) ) { throw new Error('error message here'); }  //throws error messag eto console and stops program at that point

// +=, -=, *=, /= x++ shorthand.....== loose equality, ===strong both eval to boolean
//&& and || or ! not..... "Executes" inner () first = dependency "trees" and "nodes"
//falsey (else truthy): false, 0, empty string, undefined, Nan, Null
//conditional assignment: && or || look for true/false return first definitive evid of such (|| rtns first true, && returns first false or last true) (EXAMPLE: height = height || 'six';)
x && 50; //evals to default 50 unless x has a "truthy" value
//call this function with # sides on die
function diceRoll(x) {
    return Math.floor(Math.random() * x) + 1;
}

<<<<<<< HEAD:reference_tools/js_cheat_sheet_samples.js

//Treehouse: "Making Decisions with Conditional statements"
=======
//Treehouse: "Making Decisions with Conditional statements"
>>>>>>> ba2a1a171da3f440c4a4708211058515f87eac6c:reference_tools/javascript_basics_workspaces_code_&_comments.js
// X done with this (skipped a few).

//Treehouse: "Functions"
return //ends function with a usable result
var local vs global //local better, no dependency on other parts of code

9/5/15: stopped at start of variable scope video...


//////////////////////////////////////////////////////////////////
/*              WDI PREWORK NOTES START HERE                    */
//////////////////////////////////////////////////////////////////


// "DRY": DON'T REPEAT YOURSELF
// CONTROL FLOW //////////////////////////////

//TERNARY
'Todya is ' + ((temp < 70) ? ' ' : 'not') + ' hot.'; // if T, use first expr, if F 2nd


//IF ELSE////////// REPL.IT SAVED EX: https://repl.it/BKAp/15
if ((x % 3 === 0) && (x % 5 === 0)) {
    result = 'fizzbuzz';
} else if (x % 3 === 0) {
    result = 'fizz';
} else if (x % 5 === 0) {
    result = 'buzz';
} else {
    result = x;
}

//SWITCH STATEMENT////////////////////////////
switch (dayNumber) { //exceution dependent on value in dayNumber  ie 1-7
	case value1:
		day = "Sunday";
		break;
	case value2:
		day = 'Monday';
		break;
	default:
		day = "other";
}

//WHILE LOOP//////////////////////////////////
while (lives > 0) { //until escapes due to F
	gamePlay();
	lives += 1;
}

//FOR LOOP////////////////////////////////////
for (var i = 0; i < x; i +=1) {
	//code runs # of times based on i and x values
	//maybe lives in a game etc.
}

//FOR LOOP RANDOMLY DETERMINES RGB # AND ADDS TO THE EMPTY HTML STRING 10 DIVS THEN WRITES IT TO SCREEN
//COMMON TO DECLARE VARS AT TOP OF SCRIPT
var html = '';
function randomRGB() {
  return Math.floor(Math.random() * 256);
}
function randomColor() { //BUILDS CONCATENATED COLOR VAR STRING AND RETURNS IT
  var color = 'rgb(';
  color += randomRGB() + ', ';
  color += randomRGB() + ', ';
  color += randomRGB() + ')';
  return color;
}
for (i = 1; i <= 10; i++) {
  html += '<div style="background-color:' + randomColor() + '"></div>';
}
document.write(html);


//defining a function ///////////////////////////
function greatest(x,y,z) {
    if ( (x > y) && (x > z) ) {
        return x;
    } else if ( (y > x) && (y > z) ) {
        return y;
    } else {
        return z;
    }
}
greatest(1,2,3); //invoking it with arguments
//parameters x, y and z behave as local variables inside the function and don't need be separately declared as variables.

//tic tac toe example is a saved repl.it session 9/24/15 8pm ish

// FUNCTION FIZZBUZZ TAKES PARAMETER NUM
// EVERY # 1 thru NUM LOGs EITHER WORD OR ITSELF PER IF ELSE RULES IN LOGVALUE(NUM)...
var x = 1;
function fizzBuzz(num) { //runs logValue() in a while loop
    while (x <= num) {
        logValue(num); //calls logValue() function below
        x += 1;
    }
}
function logValue(num) {
    if ((x % 3 === 0) && (x % 5 === 0)) {
        console.log('fizzbuzz');
    } else if (x % 3 === 0) {
        console.log('fizz');
    } else if (x % 5 === 0) {
        console.log('buzz');
    } else {
        console.log(x);
    }
}

//arrays//////////////////////////////////////////
var myFriends = ['bob', 'joe'];  //defining array
arrayOfArrays [0][0]; //gives first element in first array
['a', 'b', 'c'].length; //evals to 3 (helps find last or 2nd to last... element)
myFriends[myFriends.length - 1]; //evals to 'joe' since length is 2
myFriends.indexOf('joe'); //evals to 1 (if no match, evals to 0 - 1 = -1)
/////            POP, PUSH, SHIFT, UNSHIFT          ///////////////
// last item: pop off, push on, first item: shift off, unshift on
myFriends.push('jim'); //adds third friend jim to myFriends
myFriends.pop(); //removes last element (jim)
//more array functions here: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array

//for unit 6 later array exercise use this code: repl.it/BMA5/3
function setSquare(player, row, col) { //call it with setSquare('R', 0, 0);
	checkerboard[0][0] = 'R'; //to put a red piece at top left of board
}
function getPieceAt(row, col) { //returns value at that location
	return checkerboard[row][col];
}
//iterate w/ for loop, filling second array tempsInC
for (var i = 0; i < tempsInF.length; i +=1) {
    tempsInC.push(fahrToCelc(tempsInF[i]));
}
//map takes each value in 1 array, runs function on it, maps it to corresp. index in 2nd Array
var newArray = myArray.map(cube);
var newArray = myArray.forEach(cube); //takes values, runs function, prints without mapping


////////////////////////////////////////////////////////////
///////                                              ///////
///// WDI FUNDAM. 6 CHECKERBOARD ITERATION EXERCISES ///////
///// SEE REPL.IT SESSION FROM 10/2/15 2:25'ISH PM   ///////
///////                                              ///////
////////////////////////////////////////////////////////////

//iterating through an array of arrays to "reset the checkerboard"
function clearBoard() {
    for (c = 0; c < checkerboard.length; c++) {
        for (r = 0; r < checkerboard.length; r++) {
            checkerboard[c][r] = 'red';
        } //ends inner for loop
    } //ends outer for loop
}  //ends clearBoard()

/*
setUpRed() Explanation
rows (r) are the index position of each array
columns (c) are the index position or each value within each array
example: checkerboard[r][c] of [0][1] is first array, second position
*/
function setUpRed() {
    for (r = 0; r <= 2; r++) { //iterate thru top 3 rows.
        if (r % 2 === 0) { // and if row even
            for (c = 0; c < checkerboard.length; c+= 2) { // iterate thru columns making every other square red
            checkerboard[r][c] = 'R';
            } //ends for loop
        } else { //else (if row odd)
            for (c = 1; c < checkerboard.length; c+=2) { //iterate thru making every 1, 3, 5 etc red
                checkerboard[r][c] = 'R';
            } //ends for loop
        }
    } //ends outermost for loop
} // ends setUpRed()

//an assoc array with two keys red, black each containing an array of arrays. innermost array are location on board, next is all the locations which is the value for the key red or black next is the assoc array (object) container for this information.
var pieces = {
    'red' : [
            [0,0], [0, 2], [0, 4]
            ]  ,
    'black' : [
            [0, 1], [5,1], [5,3]
            ]
};

///////  END OF CHECKERBOARD ITERATION EXERCISES  /////////

////////////////////////////////////////////////////////////
///////        OBJECTS, CONSTRUCTORS, AJAX    //////////////
////////////////////////////////////////////////////////////

// constructor function using parameters and self-reference "this."
var Band = function(name, members, formed, albums, onTour) {
   this.name = name;
   this.members = members;
   this.dateFormed = formed;
   this.albums = albums;
   onTour = false;
};
var matisyahu = new Band('Matisyahu', ['Mattew Paul Miller', 'musicians'], 2000, ['Akeda', 'Spark Seeker', 'Light', 'Live at Stubbs'], false);

// a javascript object looks like a hash
var laptop = {
   // attributes
   weight: 'five pounds',
   screenSize: 15.6,
   model: 'Macbook Pro',
   //abilities
   displayLogin: function() {
      return "Please enter your password."
   }
};
// AJAX IS A JQUERY METHOD WITH A HASH PARAMETER (KEY:VALUE,)
$.ajax({
   url: 'http://www.omdbapi.com/?t=The+Dark+Knight&y=&plot=short&r=json',
   type: "GET",
   dataType: 'json',
   success: function() {
      var data = data;
      console.log(data);
      console.log(data.actors);
   },
   error: function() {
      console.log("error occurred");
   }
});

////////////////////////////////////////////////////////////
///////                                              ///////
/////    LYNDA.COM JAVASCRIPT ESSENTIAL TRAINING     ///////
///////                                              ///////
////////////////////////////////////////////////////////////

//////// CHAPTER 5: WORKING WITH THE DOM   /////////////////
// ACCESS DOM ELEMENTS (LIKE CSS SELECTORS)
var homeNav = document.getElementById('homeNav');
console.log('test');
console.log(homeNav);
console.log(homeNav.innerHTML);
homeNavLinks = homeNav.getElementsByTagName('a'); // array of links
console.log(homeNavLinks);
firsthomeNavLink = homeNavLinks[0]; // first element of array
console.log(firsthomeNavLink.innerHTML);
// select vanilla element and log inner HTML
var content = document.getElementById('vanilla');
console.log(content.innerHTML);
console.log( $('#strawberry').html() ); // logs html in strawberry w jquery

// CHANGE DOM ELEMENTS (LIKE CSS PROPERTIES AND VALUES)
mainContent = document.getElementById('mainContent');
mainContent.setAttribute('align', 'right');
var
mainTitle = document.getElementById('mainTitle');
console.log(mainTitle.innerHTML);

// CREATING DOM ELEMENTS (PLACED RELATIVE TO EXISTING ELEMENTS)
var newHeading = document.createElement('h1'); // create new ELEMENTS
var h1Text = document.createTextNode('Adam and Renee Forever'); // createTextNode
newHeading.appendChild(h1Text); // append TextNode to Element
document.getElementById('trivia').appendChild(newHeading); // append Element to existing DOM element

////////////////////////////////////////////////////////////
///////                                              ///////
/////    JS AND NODE FUNDAMENTALS YOUTUBE            ///////
///////                                              ///////
////////////////////////////////////////////////////////////

// NOde is in enterprise applications.
// Single-threaded. Multi-threaded server pools of waiting threads and blocks vs. Node server event loop single thread delegating out to async threads, moving on to next right away and as responses come in, callbacks still in the loop execute. The loop ticks and executes each tick. Analogy: Request to Amaz on and I move on, Amazon delegates to vendor and mΩoves on, callback is an error or success-shipped email.
//
// NOde Stack is non-JS V8, Event Loop, Async I/O, Std. library in JS and my app.


// 2 WAYS TO DECLAR AN OBJECT
// var obj = new Object
//	({ answer: 5, question: "what num?" });
var obj =
		{ answer: 5, question: 'what num?'};
//
// var div = document.getElementById('showSpace');
var hElement = document.createElement('h1');
var hText = document.createTextNode(obj['question']);
// same as obj.question
hElement.appendChild(hText);
document.getElementById('showSpace').appendChild(hElement)

// FUNCTIONS CAN BE CALLED LIKE OBJECTS
function fIsObj(recipient) {
	console.log( 'Hello ' + recipient);
	//  var calls = "functions can be called with . like objs."
  // document.getElementById('showSpace').appendChild(calls);
};
fIsObj.call(this, 'Folks'); // this is context

// FUNCTIONS USE CLOSEST SCOPE FOR A VAR
var x = 1;
function nearestScope(x) {
	var x = 2;
  console.log(x); // will log 2 since closer scope
};
nearestScope(x);
