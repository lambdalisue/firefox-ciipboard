function Ciipboard() {
}
Ciipboard.prototype.setText = function setText(text) {
  self.port.emit("setText", { text: text });
}
Ciipboard.prototype.getText = function getText(callback) {
  self.port.once("getText:callback", function(text) {
    callback(text);
  });
  self.port.emit("getText", {});
}

self.port.on("detach", function() {
  contentWindow.ciipboard = undefined;
});
self.port.on("attach", function() {
  let ciipboard = new Ciipboard();
  contentWindow.ciipboard = cloneInto(ciipboard, contentWindow, {
    cloneFunctions: true
  });
});

