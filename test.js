var ResKit = require('./index');

console.log('当前版本号:' + ResKit.version);
console.log(ResKit.params());

console.log(ResKit.params(200, '成功', 'ok'));
console.log(ResKit.params(200, '成功', 'ok',1));
console.log(ResKit.params(200, '成功', 'ok',2));

console.log(ResKit.isMobile('15806111230'));
console.log(ResKit.transTimesTamp('20170316173112'));

console.log('是否为openID：' + ResKit.isOpenid('oKXUCj1MOddnp-sCpGi1J1dg3TyM'))
console.log('是否为openID：' + ResKit.isOpenid('123'))
console.log('是否为固话：' + ResKit.isTelephone('1772102-'))
console.log('是否为设备号：' + ResKit.isDeviceno('AD345678900'))


var data = [
    {
        "title": "0元1GB本地流量包（员工翼支付体验）",
        "flowname": "手机上网1GB本地流量包（员工翼支付体验）",
        "total": "1024",
        "left": "848",
        "status": 1,
        "OfrCode": "2-1O0BDGG6",
        "OfrInstId": "4257536059",
        "RatablePrioriiy": "7100106300010000000",
        "ObjectId": "4257536059",
        "BillingCycleId": "201703",
        "RatableResourceId": "3100336"
    },
    {
        "title": "0元1GB本地流量包（员工翼支付体验）",
        "flowname": "手机上网1GB本地流量包（员工翼支付体验）",
        "total": "1024",
        "left": "848",
        "status": 1,
        "OfrCode": "2-1O0BDGG6",
        "OfrInstId": "4257536059",
        "RatablePrioriiy": "7100106300010000000",
        "ObjectId": "4257536059",
        "BillingCycleId": "201703",
        "RatableResourceId": "3100336"
    },
    {
        "title": "0元1GB本地流量包（员工翼支付体验）",
        "flowname": "手机上网1GB本地流量包（员工翼支付体验）",
        "total": "1024",
        "left": "850",
        "status": 1,
        "OfrCode": "2-1O0BDGG6",
        "OfrInstId": "4257536059",
        "RatablePrioriiy": "7100106300010000000",
        "ObjectId": "21113145",
        "BillingCycleId": "201703",
        "RatableResourceId": "3100336"
    },
    {
        "title": "0元1GB本地流量包（员工翼支付体验）",
        "flowname": "手机上网1GB本地流量包（员工翼支付体验）",
        "total": "1024",
        "left": "850",
        "status": 1,
        "OfrCode": "2-1O0BDGG6",
        "OfrInstId": "4257536059",
        "RatablePrioriiy": "7100106300010000000",
        "ObjectId": "21113145",
        "BillingCycleId": "201703",
        "RatableResourceId": "3100336"
    },
    {
        "title": "0元1GB本地流量包（员工翼支付体验）",
        "flowname": "手机上网1GB本地流量包（员工翼支付体验）",
        "total": "1024",
        "left": "1024",
        "status": 1,
        "OfrCode": "2-1O0BDGG6",
        "OfrInstId": "4336218214",
        "RatablePrioriiy": "7100106300010000000",
        "ObjectId": "21113145",
        "BillingCycleId": "201703",
        "RatableResourceId": "3100336"
    },
    {
        "title": "0元1GB本地流量包（员工翼支付体验）",
        "flowname": "手机上网1GB本地流量包（员工翼支付体验）",
        "total": "1024",
        "left": "1024",
        "status": 1,
        "OfrCode": "2-1O0BDGG6",
        "OfrInstId": "4336218214",
        "RatablePrioriiy": "7100106300010000000",
        "ObjectId": "21113145",
        "BillingCycleId": "201703",
        "RatableResourceId": "3100336"
    }
];
console.log('去重前数量：' + data.length);
console.log('去重结果：' + JSON.stringify(ResKit.uniqArray(data, 'ObjectId')));
console.log('去重后数量：' + ResKit.uniqArray(data, 'ObjectId').length);