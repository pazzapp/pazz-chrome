// Fills the currently selected field in the current tab
var fillField = function(text) {
  chrome.tabs.executeScript(null, {
    code: 'document.activeElement.value = "' + text + '";'
  });
};

// converts a full URL to a clipped version suitable for the site field of pazz
var siteFromUrl = function(url) {
  url = url.replace("http://", "");
  url = url.replace("https://", "");
  url = url.replace("www.", "");
  url = url.split("/")[0];
  return url;
}

var performFill = function() {
  // determine password from pazz
  var master, site, password;
  master   = $("#master").val();
  site     = $("#site").val();
  password = pazz(master, site);
  // and inject it into tab
  fillField(password);
  window.close();
}

// on startup
$(function() {

  // count the tabs to make sure we have a suitable one
  chrome.tabs.query( {active: true, currentWindow:true}, function(tabs) {
    if (tabs.length < 1)
    {
      alert("no tabs found");
      return;
    }

    // populate the site field from the tab url
    $("#site").val(siteFromUrl(tabs[0].url));

    // Focus the password window after a msec when stuff is ready
    window.setTimeout( function() {
      $("#master").focus();
    }, 10);
  });

  // handler for the form
  $("form").on("submit",function(evt) {
    performFill();
  });

  // handler for the close button
  $("#close").click(function(evt) {
    // simply close the dialog.
    window.close();
  });
});
