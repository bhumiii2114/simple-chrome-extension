chrome.runtime.onInstalled.addListener(() => {
    chrome.contextMenus.removeAll(() => {
        const contextMenuItem = {
            id: "Wiki",
            title: "Wikipedia Search",
            contexts: ["selection"]  
        };

        chrome.contextMenus.create(contextMenuItem);
    });

    // ✅ Step 3: Handle the menu click
    chrome.contextMenus.onClicked.addListener((info, tab) => {
        const newURL = "https://en.wikipedia.org/wiki/" + info.selectionText;
        chrome.tabs.create({ url: newURL });
    });
});
