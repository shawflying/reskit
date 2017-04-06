var apis = require('./apis');
var ApisProxy = require('apis-proxy');
ApisProxy.init(apis)

ApisProxy.proxy.crypto.getData({ admin: 'admin' }, function(err, data) {
    console.log(data);
});