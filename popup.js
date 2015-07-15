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
                var string = this.nextSibling.data;

                var oldItems;
                chrome.storage.sync.get(null, function(update) {
                    oldItems = update["item"];
                    for (var i = 0; i <= oldItems.length - 1; i++) {
                        if(oldItems[i] === string ) {
                            console.log(string);
                            oldItems.splice(i, 1);
                            console.log(oldItems);
                            chrome.storage.sync.set({'item': oldItems}, function() {});
                        } 
                    }
                    
            });

                parentElem.remove();

        }
    });

    // logging this prints 
    // "[input.item, context: input.item]" 
    // And within this item I can find the string I need
    // by opening up nextSibling and then finding data which nested beneath that, 
    // data is associated with my desired string
    // But, I cannot figure out how to actually reference this information with Javascript.
    // Am I going about this the best way? Is there a way dive into this nesting?
    // ($(this.nextSibling.data.keys));

    
    $('.addToListForm').submit( function(e) {
        e.preventDefault();
        
        return false; //dont do normal submit... but now we have an event handler e.. 
    });


});
