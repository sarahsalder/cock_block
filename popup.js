$(document).ready(function() {
    $('.listItemInput').focus(); //focus tell us what selector the code is reference

    $(document)

    // yeah then you should be all set if you just use a regular JS array 
    // and do a .get before every .save to see if you need to make it or 
    // append

    // Add to list
    .on('click', '.addToList', function() {
        var itemToAdd = $('input[name="listItemInput"]').val().trim(); //.val gets current value, trim maybe deletes white s
        if ( itemToAdd ) { // as long as the variable is not null----- then itll workout (an assertion)
            $('.listItems').append('<div class="input"><input type="checkbox" name="item" class="item"/> '+ itemToAdd +'</div>'); //value defines initial value before anything is entered
            chrome.storage.sync.set({'item': itemToAdd}, function() {
            // Notify that we saved.
         });
        }
        $('.listItemInput').val('').focus(); //focuses on listItemInput and clears the value
    })


    
    // Remove from list
    .on('change', '.item', function() { 
        if( $(this).is(':checked') ){
            var parentElem = $(this).parent(); 
                parentElem.remove();
        }
    });
    
    $('.addToListForm').submit( function(e) {
        e.preventDefault();
        
        return false; //dont do normal submit... but now we have an event handler e.. 
    });


      // function saveChanges() {
      //   // Get a value saved in a form.
      //   var theValue = textarea.value;
      //   // Check that there's some code there.
      //   if (!theValue) {
      //     message('Error: No value specified');
      //     return;
      //   }
      //   // Save it using the Chrome extension storage API.
      //   chrome.storage.sync.set({'value': theValue}, function() {
      //     // Notify that we saved.
      //     message('Settings saved');
      //   });
      // }


// When establishing a connection, each end is given a runtime.
// Port object which is used for sending and receiving messages through 
// that connection.
// Here is how you open a channel from a content script, 
// and send and listen for messages:

// var port = chrome.runtime.connect({name: "knockknock"});
// port.postMessage({joke: "Knock knock"});
// port.onMessage.addListener(function(msg) {
//   if (msg.question == "Who's there?")
//     port.postMessage({answer: "Madame"});
//   else if (msg.question == "Madame who?")
//     port.postMessage({answer: "Madame... Bovary"});
// });

});
