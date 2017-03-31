"use strict";var moment=require("moment"),_=require("underscore")._,CommonUtil={};CommonUtil.isMobile=function(t){return/^[1][123456789]\d{9}$/.test(t)},CommonUtil.isTelephone=function(t){return/^([0-9]{3,4}-)?[0-9]{7,8}$/.test(t)},CommonUtil.isDeviceno=function(t){return!!CommonUtil.isMobile(t)||(!!CommonUtil.isTelephone(t)||/^[A-Z]{2}[0-9]{8,10}$/.test(t))},CommonUtil.isOpenid=function(t){return!_.isEmpty(t)&&28==t.length},CommonUtil.isURL=function(t){return null!=t.match(/(http[s]?|ftp):\/\/[^\/\.]+?\..+\w$/i)},CommonUtil.isIdCard=function(t){return null!=t.match(/^[1-9]\d{7}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}$/)||null!=t.match(/^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])((\d{4})|\d{3}[A-Z])$/)},CommonUtil.isIP=function(t){return!isNull(t)&&!!(/^(\d+)\.(\d+)\.(\d+)\.(\d+)$/g.test(t)&&RegExp.$1<256&&RegExp.$2<256&&RegExp.$3<256&&RegExp.$4<256)},CommonUtil.isEmail=function(t){return!!/^[-_A-Za-z0-9]+@([_A-Za-z0-9]+\.)+[A-Za-z0-9]{2,3}$/.test(t)},CommonUtil.transTimesTamp=function(t){var n=t.substring(0,4)+"-"+t.substring(4,6)+"-"+t.substring(6,8)+" "+t.substring(8,10)+":"+t.substring(10,12)+":"+t.substring(12,14);return Date.parse(new Date(n))/1e3},CommonUtil.uniqArray=function(t,n){for(var i=[],o={},r={},e=0;e<t.length;e++){var m=t[e][n];o[m]||(i.push(t[e]),o[m]=!0,r[m]=i.length-1)}return i},CommonUtil.formatNumber=function(t){return t.substring(0,3)+"****"+t.substring(7)},CommonUtil.formatName=function(t){for(var n=t.substring(0,1),i=0;i<t.length-1;i++)n+="*";return n.length>5&&(n=n.substr(0,5)),n},module.exports=CommonUtil;