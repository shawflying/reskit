var ResKit = require('../lib');

console.log('当前版本号:' + ResKit.version);

// console.log('是否为宽带：' + ResKit.isDeviceno('AD0000410879'))
// console.log('是否为宽带：' + ResKit.isDeviceno('Ad00004108--'))

// console.log('是否为固话：' + ResKit.isDeviceno('62438858'))
// console.log('是否为固话：' + ResKit.isDeviceno('024-62438858'))
// console.log('是否为手机：' + ResKit.isDeviceno('15806111230'))
// console.log('是否为手机：' + ResKit.isDeviceno('1680611123-'))

console.log('判断' + ResKit.isDeviceno('2-112947833741'))
console.log('判断' + ResKit.isDeviceno('15806111230'))
    // console.log('手机判断' + ResKit.isMobile('2-112947833741'))
    // console.log('手机判断' + ResKit.isMobile('14806111230'))

//测试示例，必须要有的

//判断固话
console.log("判断是否固话：" + ResKit.isShdxDeviceno("23561236"));
console.log("判断是否固话：" + ResKit.isShdxDeviceno("23561236"));
console.log("判断是否宽带：" + ResKit.isShdxDeviceno("AD1234567890"));
console.log("判断是否宽带：" + ResKit.isShdxDeviceno("HH1234567890"));