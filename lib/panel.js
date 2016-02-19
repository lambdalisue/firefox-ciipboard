var self = require("sdk/self");
var tabs = require("sdk/tabs");
var panel = require("sdk/panel").Panel({
  width: 480,
  height: 440,
  contentURL: "./panel.html",
  contentScriptFile: "./js/panel.js",
  contentStyleFile: "./css/panel.css",
  onHide: function() {
    button.state("window", { checked: false });
  }
});
panel.on("show", function() {
  panel.port.emit("show", {
    url: tabs.activeTab.url
  });
});

var button = require("sdk/ui/button/toggle").ToggleButton({
  id: "show-ciipboard-panel",
  label: "Show ciipboard panel",
  icon: {
    "16": "./img/button-16.png",
    "32": "./img/button-32.png",
    "64": "./img/button-64.png"
  },
  onChange: function(state) {
    if (state.checked) {
      panel.show({
        position: button
      });
    }
  }
});
var button = require("sdk/ui/button/toggle").ToggleButton({
  id: "show-ciipboard-panel",
  label: "Show ciipboard panel",
  icon: {
    "16": "./img/button-16.png",
    "32": "./img/button-32.png",
    "64": "./img/button-64.png"
  },
  onChange: function(state) {
    if (state.checked) {
      panel.show({
        position: button
      });
    }
  }
});

exports.button = button;
