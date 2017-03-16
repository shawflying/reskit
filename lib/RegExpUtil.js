/**
 * 常用校验
 */
"use strict";

var RegExpUtil = {};

RegExpUtil.isMobile = (mobile)=> {
    //13、14、15、18开头的手机号码
    var pattern_m = /^[1][123456789]\d{9}$/;
    return pattern_m.test(mobile);
};


module.exports = RegExpUtil;