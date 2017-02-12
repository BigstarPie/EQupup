(function(){
	chrome.runtime.onMessage.addListener(function (msg, sender, sendResponse) {
		console.log('123');
    // If the received message has the expected format...
    if (msg.text === 'report_back') {
        // Call the specified callback, passing
        // the web-page's DOM content as argument
        sendResponse(document.all[0].outerHTML);
    }
	});
// 	console.log(chrome);
// 	chrome.tabs.query({}, function(tabs) {
//     for (var i = 0; i < tabs.length; i++)
//     {
//         console.log(tabs[i]);
//     }
// });
//     var str = document.getElementsByClassName('_5yl5').text;
//     // return str.replace(/\？/,'?');
//     return str;
})();


// Listen for messages
// (function(){
// 	console.log(document.all[0].outerHTML);
// })();
