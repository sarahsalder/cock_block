$(document).ready(function() {

    $('.listItemInput').focus(); //focus tell us what selector the code is reference

    $(document)



    // Add to list
    .on('click', '.addToList', function() {
        var itemToAdd = $('input[name="listItemInput"]').val().trim(); //.val gets current value, trim maybe deletes white s
        if ( itemToAdd ) { // as long as the variable is not null----- then itll workout (an assertion)
            $('.listItems').append('<div class="input"><input type="checkbox" name="item" class="item"/> '+ itemToAdd +'</div>'); //value defines initial value before anything is entered
            flaggedWords.push(itemToAdd);
            document.cookie = "userInput=" + itemToAdd;
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
    
    
    
});
