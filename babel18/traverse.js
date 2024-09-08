/* 
@babel/traverse
1:  遍历 AST：@babel/traverse 允许开发者遍历整个 AST，并对节点进行添加、删除或修改等操作。

2:  代码转换：在 Babel 的转换过程中，@babel/traverse 是实现代码转换功能的关键库之一。 */

const parser = require('@babel/parser');
const traverse = require('@babel/traverse').default;
const generate = require('@babel/generator').default;

const code = `
  function hello() {
    console.log('Hello, world!');
  }
`;
// https://astexplorer.net/
const ast = parser.parse(code, {
  sourceType: 'module'
});

traverse(ast, {
  enter(path) {
    // 当进入一个新的节点时执行的代码
    console.log('---enter---', path.node)
    if(path.node && path.node.name === 'log') {
      path.node.name = 'warn';
    }
  },
  exit(path) {
    // 当离开一个节点时执行的代码
    // console.log('---exit---', path)
  }
});

// 将修改后的 AST 转换回代码
const modifiedCode = generate(ast, {
  // 生成代码的配置
});
console.log('---modifiedCode---', modifiedCode)
