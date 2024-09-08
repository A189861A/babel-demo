var babelCore = require("@babel/core");
var es6Code = 'var fn = (num) => num + 2';
var options = {
  presets: ["@babel/env"]
};
var result = babelCore.transform(es6Code, options, function(err, result) {
  // 用来对转码后的对象进行进一步处理
  result; // => { code, map, ast }
  console.log('--x--', result)
});
console.log('-----1---------');
console.log(result);
console.log('-----2---------');
// console.log(result.code);
