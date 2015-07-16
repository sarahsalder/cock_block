
$(document).ready(function() {

var unreadMessages = document.getElementsByClassName("unreadMessage");

var previousEntries;

chrome.storage.sync.get(null, function(data){
    previousEntries = (data["item"]);
    killMessages();
});

function killMessages(){
    for (var i=0; i < unreadMessages.length; i++) {
    var messagePreview = unreadMessages[i].getElementsByClassName("previewline");

    for (var j=0; j < previousEntries.length; j++) {
      var messageString = $(messagePreview[0]).text(); 
      if (messageString.includes(previousEntries[j])) {
        $(unreadMessages[i]).hide();
      }
    }
  }
}


});