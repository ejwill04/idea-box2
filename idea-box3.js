$(document).ready(function (){
  for (var i=0; i < localStorage.length; i++) {
    var objectIdea = JSON.parse(localStorage.getItem(localStorage.key(i)));
    createIdea(objectIdea);
    $('.title-input').focus();
  }
});

function createIdea(idea) {
 $('.render-idea').prepend(
   `<li class ='idea-box' id=${idea.id}>
       <h2 class='title-result' contenteditable>${idea.title}</h2>
       <p class='body-result' contenteditable>${idea.body}</p>
       <span display='inline'>quality: <p class='quality'>${idea.quality}</p></span>
       <button class='delete-button'>delete
       </button>
       <button class='upvote'>Up</button>
       <button class='downvote'>Down</button>
     </li>`);
}

function Idea(title, body){
   this.title = title;
   this.body = body;
   this.id = Date.now();
   this.quality = 'swill';
}

//save feature
$('.save-button').on('click', function(){
   var title = $('.title-input').val();
   var body = $('.body-input').val();
   var idea = new Idea(title, body);
   createIdea(idea);
   localStorage.setItem(idea.id, JSON.stringify(idea));
   clearInput();
   $('.title-input').focus();
});

//delete feature
$('.render-idea').on('click', '.delete-button', function(){
  var idNumber = $(this).closest('li').attr('id');
  localStorage.removeItem(idNumber);
  $(this).closest('li').remove();
});

//quality feature
$('.render-idea').on('click', '.upvote, .downvote', function() {
  var parentSelector = $(this).closest('li');
  var idNumber = parentSelector.attr('id');
  var quality = parentSelector.find('.quality').text();
  var newQuality;
  if ($(this).is('.upvote') ) {
    newQuality = upVote(quality);
  } else if ($(this).is('.downvote')) {
    newQuality = downVote(quality);
  }
  changeQualityText(parentSelector, newQuality);
  storeQuality(idNumber, newQuality);
});

function changeQualityText (parentSelector, newQuality) {
  parentSelector.find('.quality').text(newQuality);
}

function storeQuality (idNumber, newQuality) {
  var ideaBox = JSON.parse(localStorage.getItem(idNumber));
  ideaBox.quality = newQuality;
  localStorage.setItem(idNumber, JSON.stringify(ideaBox));
}

function upVote (quality) {
  switch (quality) {
    case 'swill':
      return 'plausible';
    case 'plausible':
      return 'genius';
    default:
      return 'genius';
  }
}

function downVote (quality) {
  switch (quality) {
    case 'genius':
      return 'plausible';
    case 'plausible':
      return 'swill';
    default:
      return 'swill';
  }
}
//end of quality feature

function clearInput () {
  $('.title-input').val('');
  $('.body-input').val('');
}

$('.search-bar').on('keyup', function() {
  var userSearch = $(this).val().toLowerCase();
  $('.idea-box').each(function() {
    var titleText = $(this).find('.title-result').text().toLowerCase();
    var bodyText = $(this).find('.body-result').text().toLowerCase();
    titleText.indexOf(userSearch) !== -1 || bodyText.indexOf(userSearch) !== -1 ? $(this).show("slow") : $(this).hide("slow");
  });
});
