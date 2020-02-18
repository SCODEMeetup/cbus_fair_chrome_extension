//This is the only extension script that is always running- in the background. Remembering that extensions are event based, this script handles events that happen outside of the known contexts (target domains / popups), for example, changing the Page Action Icon from 'inactive' (grey) to 'active' (green) 

//Listens for message from content.js
chrome.runtime.onMessage.addListener((message, sender) => {

  if (message.onGoogle === true) {
    chrome.pageAction.setIcon({
        tabId: sender.tab.id,
        path: {
            "16" : "images/icons/iconx16.png",
            "48" : "images/icons/iconx48.png",
            "128" : "images/icons/iconx128.png"
        },
    }) 
    chrome.pageAction.show(sender.tab.id);
  }
})