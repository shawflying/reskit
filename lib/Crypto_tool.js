var crypto = require('crypto');
var moment = require("moment");
/**
 * 加密码
 * @param data 内容
 * @param key 密钥
 * @returns {*}
 */
exports.aesEncrypt = function (data, key) {
    try {
        var cipher = crypto.createCipher('aes-128-ecb', key);
        var data = cipher.update(data, 'utf8', 'hex') + cipher.final('hex');
        return data;
    } catch (e) {
        console.error('加密时异常' + e);
        return '';
    }
};

/**
 * 解密
 * @param data 内容
 * @param key 密钥
 * @returns {*}
 */
exports.aesDecrypt = function (data, key) {
    try {
        var cipher = crypto.createDecipher('aes-128-ecb', key);
        var data = cipher.update(data, 'hex', 'utf8') + cipher.final('utf8');
        return data;
    } catch (e) {
        console.error('解密时异常' + e);
        return '';
    }
};

/**
 * md5 加密
 * @param content
 * @returns {*}
 */
exports.md5 = function (content) {
    return crypto.createHash('md5').update(content).digest('hex');
};

var iv = 'mohoo-telecom-wx';
/**
 * 加密 -PHP对接，需要进一步完善，暂时不要使用
 * @param data 内容
 * @param key 密钥
 * @returns {*}
 */
exports.phpEncrypt = function (data, key) {
    try {
        var mdkey = crypto.createHash('md5').update(key).digest('hex');
        var cipher = crypto.createCipheriv('aes-256-cbc', mdkey, iv);
        var temp = cipher.update(data, 'binary', 'base64') + cipher.final('base64');
        return temp;
    } catch (e) {
        console.error('加密时异常' + e);
        return '';
    }
};
/**
 * 解密-PHP对接，需要进一步完善，暂时不要使用
 * @param data 内容
 * @param key 密钥
 * @returns {*}
 */
exports.phpDecrypt = function (data, key) {
    try {
        var mdkey = crypto.createHash('md5').update(key).digest('hex');
        var decipher = crypto.createDecipheriv('aes-256-cbc', mdkey, iv);
        var temp = decipher.update(data, 'base64', 'binary') + decipher.final('binary');
        return temp;
    } catch (e) {
        console.error('解密时异常' + e);
        return '';
    }
};

//加密 添加时间戳
exports.tool_Encrypt = (value, key) => {
    var str = "";
    var mytime = moment().unix();
    key = key + mytime;
    str = exports.aesEncrypt(value, key);
    str = str + mytime;
    return str;
}

//解密过程，设置过期时间
//返回为空时，1. 参数异常 2. 时间超时
exports.tool_Decrypt = (value, key) => {
    var str = "";
    var mytime = value.substr(value.length - 10);
    var myvalue = value.substr(0, value.length - 10);
    var a = moment(mytime * 1000)
    var b = moment()
    var timeDiff = b.diff(a, 'seconds');//b > a 
    if (timeDiff > 60) {//失效时间
        return str;
    } else {
        key = key + mytime;
        str = exports.aesDecrypt(myvalue, key);
        return str;
    }
}