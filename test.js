var ResKit = require('./index');

console.log('当前版本号:' + ResKit.version);
console.log(ResKit.params());

console.log(ResKit.params(200,'成功','ok'));

console.log(ResKit.isMobile('15806111230'));
console.log(ResKit.transTimesTamp('20170316173112'));

