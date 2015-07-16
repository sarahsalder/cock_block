
$(document).ready(function() {

    var loadData = function(data) { 
        previousEntries = data["item"];
        var arrayLength = previousEntries.length;
 
        for (var i = 0; i < arrayLength; i++) {
            $('.listItems').append('<div class="input"><input type="checkbox" name="item" class="item"/> '+ previousEntries[i] +'</div>'); 
        }
    }

    //load previous entries from chrome storage
    var previousEntries;
    chrome.storage.sync.get(null, loadData);

    $('.listItemInput').focus(); 

    $(document)
    // Add to list
    .on('click', '.addToList', function() {
        var itemToAdd = $('input[name="listItemInput"]').val().trim(); 
            $('.listItems').append('<div class="input"><input type="checkbox" name="item" class="item"/> '+ itemToAdd +'</div>'); 
            
        //if storage 'item' is undefined, set it to an empty array
        chrome.storage.sync.get(null, function(data) {
          if (data["item"] == undefined);
            chrome.storage.sync.set({'item': []}, function() {} );
        });

        //add element to 'item'
            var oldItems;
            chrome.storage.sync.get(null, function(data) { 
                oldItems = data["item"];
                oldItems.push(itemToAdd);
                chrome.storage.sync.set({'item': oldItems}, function() {});
                $('.listItemInput').val('').focus(); //focuses on listItemInput and clears the value
            });
    });   
    
    $(document)
    // Remove from list and 
    .on('change', '.item', function() { 
        if( $(this).is(':checked') ){

            var parentElem = $(this).parent(); 
                var string = this.nextSibling.data.trim();
                var oldItems;
                chrome.storage.sync.get(null, function(update) {
                    oldItems = update["item"];
                    for (var i = 0; i <= oldItems.length - 1; i++) {
                        if(oldItems[i] === string ) {
                            oldItems.splice(i, 1);
                            chrome.storage.sync.set({'item': oldItems}, function() {});
                        } 
                    }
            });
                parentElem.remove();
        }
    });
    
    $('.addToListForm').submit( function(e) {
        e.preventDefault();
        return false;  
    });


     chrome.storage.onChanged.addListener(function(changes, sync) {
           chrome.storage.sync.get(null, function(data){
                previousEntries = (data["item"]);
                var unreadMessages = document.getElementsByClassName("unreadMessage");
                
                
                for (var i=0; i < unreadMessages.length; i++) {
                    var messagePreview = unreadMessages[i].getElementsByClassName("previewline");
                    $(unreadMessages[i]).show();
                    for (var j=0; j < previousEntries.length; j++) {
                        var messageString = $(messagePreview[0]).text(); 
                            if (messageString.includes(previousEntries[j])) {
                                $(unreadMessages[i]).hide();
                            }
                    }
                }
            });
            
     });

// jquery toggle... 


});
