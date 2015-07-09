// var script = document.createElement('script');script.src = "https://ajax.googleapis.com/ajax/libs/jquery/1.6.3/jquery.min.js";document.getElementsByTagName('head')[0].appendChild(script);


var unreadMessages = document.getElementsByClassName("unreadMessage");
var flaggedWords = ["sexy", ";)", "cute"]

// document.cookie = "userInput=" + itemToAdd;

for (var i=0; i < unreadMessages.length; i++) {
  var messagePreview = unreadMessages[i].getElementsByClassName("previewline");

  for (var j=0; j < flaggedWords.length; j++) {
    var messageString = $(messagePreview[0]).text(); 
    if (messageString.includes(flaggedWords[j])) {
      $(unreadMessages[i]).hide();
    }
  }
}