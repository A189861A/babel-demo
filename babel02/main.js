var fn = (num) => num + 2;
var promise = Promise.resolve('ok')

// 发现Babel并没有对ES6的Promise进行转换 。