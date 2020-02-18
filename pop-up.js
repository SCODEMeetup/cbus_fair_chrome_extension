console.log(`Pop-up loaded...`) //DEBUG - Remove for production

document.addEventListener('DOMContentLoaded', () =>{
  
  chrome.tabs.query({active: true, currentWindow: true}, (tabs) => {
    chrome.tabs.sendMessage(tabs[0].id, {getSearchInfo : true}, (response) => {
      
      let addressWrapper = document.getElementById('address-wrapper');
      let address = document.createTextNode(response.searchAddress);
      addressWrapper.appendChild(address);
    })
  })
})