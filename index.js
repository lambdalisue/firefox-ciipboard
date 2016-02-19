var self = require("sdk/self");
var clipboard = require("sdk/clipboard");
var ciipboard = require("./lib/ciipboard");

// Ciipboard core
ciipboard.enable();

// Ciipboard button
var button = require("./lib/panel").button;
