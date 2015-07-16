var block = {};
$(document).ready(function() {

var unreadMessages = document.getElementsByClassName("unreadMessage");


function loadData(data) { 
        block.previousEntries = data["item"];
    }

chrome.storage.sync.get(null, loadData);


console.log(block.previousEntries);


  // for (var i=0; i < unreadMessages.length; i++) {
  //   var messagePreview = unreadMessages[i].getElementsByClassName("previewline");

  //   for (var j=0; j < previousEntries.length; j++) {
  //     var messageString = $(messagePreview[0]).text(); 
  //     if (messageString.includes(previousEntries[j])) {
  //       $(unreadMessages[i]).hide();
  //     }
  //   }
  // }



});