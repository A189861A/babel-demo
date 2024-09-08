const parser = require('@babel/parser');

const code = `function hello() {
  console.log('Hello, world!');
}`;

try {
  const ast = parser.parse(code, {
    sourceType: 'module', // 'script' 或 'module'
    // 其他选项...
  });
  console.log("---ast---", ast);
} catch (error) {
  console.error(error);
}
