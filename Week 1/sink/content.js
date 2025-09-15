//some of the dangerous things that can be  in javascript code
var badThings = ['innerHTML', 'eval', 'document.write', 'setTimeout', 'location.href'];
var foundBad = [];

var scripts = document.getElementsByTagName('script');
for (var i = 0; i < scripts.length; i++) {
  if (scripts[i].innerHTML) {
    for (var j = 0; j < badThings.length; j++) {
      if (scripts[i].innerHTML.indexOf(badThings[j]) !== -1) {
        foundBad.push(badThings[j]);
      }
    }
  }
}

var pageHTML = document.documentElement.innerHTML;
for (var k = 0; k < badThings.length; k++) {
  if (pageHTML.indexOf(badThings[k]) !== -1) {
    if (foundBad.indexOf(badThings[k]) === -1) {
      foundBad.push(badThings[k]);
    }
  }
}

// popup asking for results
chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
  sendResponse({foundBad: foundBad});
});
