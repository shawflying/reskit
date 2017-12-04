var tool = require("./Crypto_tool");
var moment = require("moment");


var value = "admin";
var key = "mohoo";

var myEncodeValue = tool.tool_Encrypt(value, key);
var myDecodeValue = tool.tool_Decrypt(myEncodeValue, key);
console.log("原始值：" + value);
console.log("加密结果：" + myEncodeValue)
console.log("解密信息：" + myDecodeValue)
