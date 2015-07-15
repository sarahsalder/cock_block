

    //load previous entries from chrome storage
    var previousEntries;
    chrome.storage.sync.get(null, function(data) { 
        previousEntries = data["item"];
        console.log(previousEntries);
        var arrayLength = previousEntries.size;
    
        for (var i = 0; i < arrayLength; i++) {
            console.log(previousEntries[i]);
        }

    });
    

    became

    var loadData = function(data) { 
    previousEntries = data["item"];
    console.log(previousEntries);
    var arrayLength = previousEntries.size;

        for (var i = 0; i < arrayLength; i++) {
            console.log(previousEntries[i]);
        }

    }

    //load previous entries from chrome storage
    var previousEntries;
    chrome.storage.sync.get(null, loadData);