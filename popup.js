$(document).ready(function() {

    $('.listItemInput').focus(); //focus tell us what selector the code is reference
    chrome.storage.sync.set({'item': []}, function() {} );

    $(document)
    // Add to list
    .on('click', '.addToList', function() {
        var itemToAdd = $('input[name="listItemInput"]').val().trim(); 
            $('.listItems').append('<div class="input"><input type="checkbox" name="item" class="item"/> '+ itemToAdd +'</div>'); 
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
