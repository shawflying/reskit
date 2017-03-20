var package = require('./package.json');
var ResKit = require('./lib/ResKit');
var CommonUtil = require('./lib/CommonUtil');

exports.version = package.version;
exports.params = ResKit.params;
exports.isEmail = CommonUtil.isEmail;
exports.isIdCard = CommonUtil.isIdCard;
exports.isIP = CommonUtil.isIP;
exports.isMobile = CommonUtil.isMobile;
exports.isURL = CommonUtil.isURL;
exports.transTimesTamp = CommonUtil.transTimesTamp;
exports.isOpenid = CommonUtil.isOpenid;
exports.isTelephone = CommonUtil.isTelephone;
exports.isDeviceno = CommonUtil.isDeviceno;