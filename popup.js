$(document).ready(function() {


    var loadData = function(data) { 
        previousEntries = data["item"];
        var arrayLength = previousEntries.length;
 
    
        for (var i = 0; i < arrayLength; i++) {
            console.log(previousEntries[i]);
            $('.listItems').append('<div class="input"><input type="checkbox" name="item" class="item"/> '+ previousEntries[i] +'</div>'); 
        }

    }

    //load previous entries from chrome storage
    var previousEntries;
    chrome.storage.sync.get(null, loadData);
    




     

    //focus tell us what selector the code is reference
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


});
