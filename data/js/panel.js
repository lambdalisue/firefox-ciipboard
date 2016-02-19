self.port.on("show", function(info) {
  var url = document.querySelector("#url");
  url.value = info.url;
});
