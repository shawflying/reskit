var ResKit = require('./index');

console.log('当前版本号:' + ResKit.version);
console.log(ResKit.params());

console.log(ResKit.params(200, '成功', 'ok'));

console.log(ResKit.isMobile('15806111230'));
console.log(ResKit.transTimesTamp('20170316173112'));

console.log('是否为openID：' + ResKit.isOpenid('oKXUCj1MOddnp-sCpGi1J1dg3TyM'))
console.log('是否为openID：' + ResKit.isOpenid('123'))
console.log('是否为固话：' + ResKit.isTelephone('1772102-'))
console.log('是否为设备号：' + ResKit.isDeviceno('AD345678900'))