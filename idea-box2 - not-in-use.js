var $title = $('.title-field');
var $body = $('.body-field');
var ideaArray = [];
var sortedArray = [];
var $ideaList = $('.idea-list');

//changes the qaulity either up or down to it's max value
var qualityChangers = {
  up: {
    genius: "genius",
    plausible: "genius",
    swill: "plausible"
  },
  down: {
    genius: "plausible",
    plausible: "swill",
    swill: "swill"
  }
};

//when document is ready, starts function
$('document').ready( function() {
  //parses out value in localStorage saved as ideaArray and sets to holdingvalue
  var holdingValue = JSON.parse(localStorage.getItem("ideaArray"));
  //does this if test to see if there is a value?  If so, then it sets the ideaArray to holdingValue and run the render function on ideaArray
  if (holdingValue) {
    ideaArray = holdingValue;
    render(ideaArray);
  }
});

//add search event listener here

function render(givenArray) {
  var renderArray; //create empty variable
  if (givenArray) { //if the argument givenArray is passed in, we set the renderArray value to renderArray
    renderArray = givenArray;
  } else if (!givenArray) { //if not given an array, then the renderArray = ideaArray
    //what is the value of ideaArray?
    renderArray = ideaArray; //is the ideaArray empty here?
  $('.idea-list').empty();  //deletes child elements and any text
  for (var i = 0; i < renderArray.length; i++) {
    createCard(renderArray[i]); //what does createCard do?  Is renderArray an array?
  }
  }
}

//add save event listener here

//add delete button listener here

//add function to deleteIdea from localStorage

//create constructor object that takes in title and body.  id is new Date().getTime() and quality defaults to swill

//create function to store idea in localStorage

//create function to createCard that takes in the idea (similar to how we did it)
function createCard (idea) {
  $ideaList.prepend(`<article class="newIdea" id=${idea.id}
    <div id="card-top">
      <h2 id="card-title" contentEditable>${idea.title}</h2>
      <input id="card-button delete" type="button">
    </div>
    <div id="card-middle">
      <p class="card-body" contentEditable>${idea.body}</p>
    </div>
    <div id="card-bottom">
      <input id="card-button upvote" type="button">
      <input id="card-button downvote" type="button">
      <div class"card-quality

      `);
}


//create function to find the idea by the ID.  takes in an ID.

//create event listener for up-button.  Will also need to setItem in localStorage.

//create event listener for down-button.  Will also need to setItem in localStorage.

//create event listener for updating idea-title.  Will also need to setItem in localStorage.

//create event listener for updating idea-body.  Will also need to setItem in localStorage.

//create event listener for sorting.
//line 174 - why is var sortOrder = false?
//create function to sort.
