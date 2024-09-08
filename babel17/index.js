require("@babel/register")({
});

var babelCore = require("@babel/core");
var es6Code = 'var fn = (num) => num + 2';
var options = {
  presets: ["@babel/env"]
};
var result = babelCore.transform(es6Code, options);
console.log('-----1---------');
console.log(result);
console.log('-----2---------');
console.log(result.code);
