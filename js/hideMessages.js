
var unreadMessages = document.getElementsByClassName("unreadMessage");


for (var i=0; i < unreadMessages.length; i++) {
  var messagePreview = unreadMessages[i].getElementsByClassName("previewline");
  // console.log(messagePreview);
  if ($("messagePreview:contains(' ')")) {
    console.log(unreadMessages[0]);
    $(unreadMessages[i]).hide();
  }
}

// In order to handle incoming connections, 
// you need to set up a runtime.onConnect event listener. 
// This looks the same from a content script or an extension page. 
// When another part of your extension calls "connect()", 
// this event is fired, along with the runtime.Port object you can 
// use to send and receive messages through the connection. 
// Here's what it looks like to respond to incoming connections:


    chrome.runtime.onConnect.addListener(function(port) {
        console.assert(port.name == "knockknock");
        port.onMessage.addListener(function(msg) {
            if (msg.joke == "Knock knock")
                port.postMessage({question: "Who's there?"});
            else if (msg.answer == "Madame")
                port.postMessage({question: "Madame who?"});
            else if (msg.answer == "Madame... Bovary")
                port.postMessage({question: "I don't get it."});
        });
    });

