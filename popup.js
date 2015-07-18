$(document).ready(function() {

    //load previous entries 
    var loadData = function(data) { 
        previousEntries = data["item"];
        var arrayLength = previousEntries.length;
 
        for (var i = 0; i < arrayLength; i++) {
            $('.listItems').append('<div class="input"><input type="checkbox" name="item" class="item entries"/> '+ previousEntries[i] +'</div>'); 
        }
    }

    var previousEntries;
    chrome.storage.sync.get(null, loadData);
    $('.listItemInput').focus(); 

    
    // Add to list
    $(document)
    .on('click', '.addToList', function() {
        var itemToAdd = $('input[name="listItemInput"]').val().trim(); 
            $('.listItems').append('<div class="input"><input type="checkbox" name="item" class="item entries"/> '+ itemToAdd +'</div>'); 
            
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
    
    
    // Remove from list 
    $(document) 
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
    
     chrome.storage.onChanged.addListener(function(changes, sync) {
           chrome.storage.sync.get(null, function(data){
                previousEntries = (data["item"]);
                var unreadMessages = document.getElementsByClassName("unreadMessage");
                
                for (var i=0; i < unreadMessages.length; i++) {
                    var messagePreview = unreadMessages[i].getElementsByClassName("previewline");
                    $(unreadMessages[i]).show();
                    for (var j=0; j < previousEntries.length; j++) {
                        var messageString = $(messagePreview[0]).text(); 
                            if (messageString.toLowerCase().includes(previousEntries[j].toLowerCase())) {
                                $(unreadMessages[i]).hide();
                            }
                    }
                }
            });
            
     });



});
