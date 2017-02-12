document.getElementById("test").addEventListener('click', () => {
    function modifyDOM() {
        console.log('Tab script:');
        var contextArray = document.getElementsByClassName('_5yl5');
        for( var i = 0; i< contextArray.length ; i++){
            var a = contextArray[i].textContent;
            while(a != a.replace(/[\uff1f]/,'?')){
                a = a.replace(/[\uff1f]/,'?');
            }
            contextArray[i].textContent = a;
        }
        return document.body.innerHTML;
    }

    //We have permission to access the activeTab, so we can call chrome.tabs.executeScript:
    chrome.tabs.executeScript({
        code: '(' + modifyDOM + ')();' //argument here is a string but function.toString() returns function's code
    }, (results) => {
        //Here we have just the innerHTML and not DOM structure
        console.log('Popup script:');
    });
});