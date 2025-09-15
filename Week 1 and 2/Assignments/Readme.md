## Assignments for Week 1 and 2 (Frontend)

### Livedom

This was implemented by rendering the written HTML in an iframe. A javascript logic takes the contents of the input textarea and writes it to the iframe using `srcdoc` attribute. This way, a Livedom is created in which the changes are seen in real time.

### Chrome Extension to list dangerous sinks

A chrome extension needs a manifest.json file to define the extension like its meta data. The popup.html file is the UI of the extension which is shown when the extension icon is clicked. The popup.js file contains the logic to fetch the dangerous sinks from the current webpage. The content.js file is injected into the current webpage and it scans the DOM for dangerous sinks as defined in the `badThings` array.

In content.js, there is a nested loop. It scans throuhgh all the scripts in the page. For each script, it checks if the script contains any of the code defined in the `badThings` array. If a match is found, it adds it to the `foundBad` array.

Here, the communication between the popup and the content script is done using `chrome.tabs.query` and `chrome.tabs.sendMessage`. The popup sends a message to the content script to fetch the results, and the content script responds with the `foundBad` array.

Parameters of chrome.tabs.query:
- active: true - This says that the query should be done on the active tab.
- currentWindow: true - This says that the query should be done in the current window.

Parameters of chrome.tabs.sendMessage:
- tab.id - This is the ID of the tab to which the message is sent. tab[0].id is the active tab's ID.
- {} - empty object is sent since no specific data is needed to be sent to the content script.
- function(response) {} - This is the callback function that is executed when the content script responds. The response contains the `foundBad` array. Then, this function updates the popup UI with the results.

Ref: https://developer.chrome.com/docs/extensions/get-started

### CTF related to DOM Clobbering

This is a comment section where users can post comments. A flag is hidden in the DOM of the comment section.. It appears if the user gets access to a special panel which is only available to admin.

Further explained in the [SOLUTION.md](./ctf/SOLUTION.md) file.