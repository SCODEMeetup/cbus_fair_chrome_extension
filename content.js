//Default content script - This is the only file that has access to the DOM. This script runs when the browser in on a matching domain. Matches are defined in manifest.json

console.log(`Google detected...`) //DEBUG - Remove for production

//Each part of a Chrome extension exists in its own 'separate world' and these world's communicate with each other though message passing, which is a part of the Chrome API. Below we are using the sendMessage() function, which accepts a key-value pair as an argument. Message scripts can also accept a callback function that handles an optional response from the message recipient. DOCS -> https://developer.chrome.com/extensions/messaging //

let rawPageInfo = [...document.getElementsByClassName("mod")];

rawPageInfo.forEach(element => {
  let string = element.textContent;

  if(string.includes("Address")){

    let stringArr = string.split(':');
    let address = stringArr[1];
    console.log(`Detected Address: ${address}`); //DEBUG - Remove from production 

    chrome.runtime.sendMessage({onGoogle : true}); //Activates Page Action Icon

    chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
      if(request.getSearchInfo === true){
        console.log('Message received...')
        sendResponse({searchAddress : address })
      }
    })
  }
});