"use strict";

/**
 *
 * @param data
 * @param status
 * @constructor
 */
var ResKit = {};

/**
 * 通用返回参数
 * @param status 200 成功数据，0 表示处理失败  500 表示服务异常
 * @param data
 * @param info 返回接口描述，默认隐藏 测试时 显示
 * @param debug 1 显示 0 不显示 是否显示描述
 * @returns {{status: *, data: *, info: *}}
 */
ResKit.params = (status = 0, data = '服务器繁忙', info = '', debug = 0) => {
    var param = { status: status, data: data, info: info };
    param.info = (debug == 1) ? param.info : '';
    return param;
};

// ResKit.params = function (status, data, info, debug) {
//     status = status || 0;
//     data = data || '服务器繁忙';
//     info = info || '';
//     debug = debug || 0;
//     var param = {status: status, data: data, info: debug == 1 ? info : ''};
//     if (debug) {
//         console.log('返回参数：' + JSON.stringify(param));
//     }
//     return param;
// };

/**
 * 针对csb请求模板
 * @param resNum 0 表示成功 50005表示请求失败
 * @param resData 结果
 * @param resMsg
 * @returns {{resNum: string, resData, resMsg: *}}
 */
ResKit.csb = (resNum = 50005, resData = '服务器繁忙', resMsg = 'success') => {
    var param = { resNum: resNum, resData: resData, resMsg: resMsg };
    return param;
};


module.exports = ResKit;