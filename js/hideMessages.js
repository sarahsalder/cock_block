
var unreadMessages = document.getElementsByClassName("unreadMessage");


for (var i=0; i < unreadMessages.length; i++) {
  var messagePreview = unreadMessages[i].getElementsByClassName("previewline");
  // console.log(messagePreview);
  if ($("messagePreview:contains(' ')")) {
    console.log(unreadMessages[0]);
    $(unreadMessages[i]).hide();
  }
}

