/**
 * 通用功能
 */
"use strict";
var moment = require('moment');
var _ = require("underscore")._;
var CommonUtil = {};

/**
 * 校验手机号码
 * 13、14、15、18开头的手机号码
 * @param mobile
 * @returns {boolean}
 */
CommonUtil.isMobile = (mobile)=> {
    var t = /^[1][123456789]\d{9}$/;
    return t.test(mobile);
};

/**
 * 是否固话
 * @param telephone
 * @returns {boolean}
 */
CommonUtil.isTelephone = (telephone)=> {
    var t = /^([0-9]{3,4}-)?[0-9]{7,8}$/;
    return t.test(telephone);
};

/**
 * 是否为设备号
 * 1. 设备号包括 手机固话，宽带
 * @param deviceno
 * @returns {boolean}
 */
CommonUtil.isDeviceno = (deviceno)=> {
    if (CommonUtil.isMobile(deviceno)) {
        return true;
    } else if (CommonUtil.isTelephone(deviceno)) {
        return true;
    } else {
        var t = /^[A-Z]{2}[0-9]{8,10}$/;
        return t.test(deviceno)
    }
};

/**
 * 校验openID
 * @param openid
 * @returns {boolean}
 */
CommonUtil.isOpenid = (openid)=> {
    return (!_.isEmpty(openid) && openid.length == 28) ? true : false;
};

/**
 * 检查输入的URL地址是否正确
 * 输入:str  字符串
 *  返回:true 或 flase; true表示格式正确
 */
CommonUtil.isURL = function (str) {
    if (str.match(/(http[s]?|ftp):\/\/[^\/\.]+?\..+\w$/i) == null) {
        return false
    } else {
        return true;
    }
};

/**
 * 检查输入的身份证号是否正确
 * 输入:str  字符串
 *  返回:true 或 flase; true表示格式正确
 */
CommonUtil.isIdCard = function (str) {
    //15位数身份证正则表达式
    var arg1 = /^[1-9]\d{7}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}$/;
    //18位数身份证正则表达式
    var arg2 = /^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])((\d{4})|\d{3}[A-Z])$/;
    if (str.match(arg1) == null && str.match(arg2) == null) {
        return false;
    } else {
        return true;
    }
};

/**用途：校验ip地址的格式
 输入：strIP：ip地址
 返回：如果通过验证返回true,否则返回false；
 **/

CommonUtil.isIP = function (strIP) {
    if (isNull(strIP)) return false;
    var re = /^(\d+)\.(\d+)\.(\d+)\.(\d+)$/g //匹配IP地址的正则表达式
    if (re.test(strIP)) {
        if (RegExp.$1 < 256 && RegExp.$2 < 256 && RegExp.$3 < 256 && RegExp.$4 < 256) return true;
    }
    return false;
};


/*
 用途：检查输入对象的值是否符合E-Mail格式
 输入：str 输入的字符串
 返回：如果通过验证返回true,否则返回false
 */
CommonUtil.isEmail = function (str) {
    var myReg = /^[-_A-Za-z0-9]+@([_A-Za-z0-9]+\.)+[A-Za-z0-9]{2,3}$/;
    return myReg.test(str) ? true : false;
};

/**
 * 用途：转换时间戳
 * 输入:YYYYMMDDHHmmss
 */
CommonUtil.transTimesTamp = function (s) {
    var formatTime = s.substring(0, 4) + '-' + s.substring(4, 6) + '-' + s.substring(6, 8) + ' ' + s.substring(8, 10) + ':' + s.substring(10, 12) + ':' + s.substring(12, 14);
    var TimesTamp = Date.parse(new Date(formatTime));//单位毫秒
    //return moment(TimesTamp).format('YYYY-MM-DD HH:mm:ss');
    return TimesTamp / 1000;
};


module.exports = CommonUtil;