var package = require('./package.json');
var ResKit = require('./lib/ResKit');

exports.version = package.version;
exports.ResKit = ResKit;

console.log(exports.version);