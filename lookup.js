chrome.runtime.onInstalled.addListener(()=>{
    var contextMenuItem={
        "id":"Wiki",
        "title":"Wikipedia Search",
        "contexts":["Selection"]
    }
    chrome.contextMenus.create(contextMenuItem);

    chrome.contextMenus.onClicked.addListener(function(info, tab){
    var newURL = "http://en.wikipedia.org/wiki/" + info.selectionText;
    chrome.tabs.create({ url: newURL });
})

});