var pageMod = require("sdk/page-mod");
var clipboard = require("sdk/clipboard");

function Ciipboard(worker) {
  this.worker = worker;
}

Ciipboard.prototype.setText = function setText(info) {
  clipboard.set(info.text, "text");
};
Ciipboard.prototype.getText = function getText(info) {
  let text = clipboard.get("text");
  this.worker.port.emit("getText:callback", text);
};
Ciipboard.prototype.start = function start() {
  this.worker.port.on("setText", this.setText);
  this.worker.port.on("getText", this.getText);
};
Ciipboard.prototype.stop = function start() {
  this.worker.port.removeListener("setText", this.setText);
  this.worker.port.removeListener("getText", this.getText);
};

function enable() {
  pageMod.PageMod({
    include: ['*'],
    contentScriptWhen: "start",
    contentScriptFile: "./ciipboard.js",
    onAttach: function(worker) {
      let ciipboard = new Ciipboard(worker);
      ciipboard.start();
    }
  });
}

exports.enable = enable;
