// Simple popup script
document.addEventListener('DOMContentLoaded', function() {
  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    chrome.tabs.sendMessage(tabs[0].id, {}, function(response) {
      var badList = response.foundBad;
      var html = '';
      if (badList.length > 0) {
        html = 'Found dangerous stuff:<br>';
        for (var i = 0; i < badList.length; i++) {
          html += badList[i] + '<br>';
        }
      } else {
        html = 'No dangerous stuff found!';
      }
      document.getElementById('results').innerHTML = html;
      document.getElementById('loading').style.display = 'none';
      document.getElementById('results').style.display = 'block';
    });
  });
});
