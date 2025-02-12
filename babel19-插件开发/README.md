# Babel 插件通过对 AST 的修改实现代码的修改

# 开发环境搭建

- 为了方便开发和调试插件，我搭建一个插件的开发环境，其实就是 babel 的最小化环境, 只需要安装 babel 的核心包，然后在 .babelrc 文件中配置 plugins ，该配置项是一个数组，表示 Babel 需要加载的插件列表，我们将其指向自定义插件的路径就可以了。
- 正式环境下，应该将插件单独打包，发布到 npm 进行引用。

# 插件的基本结构

- 插件本身是一个函数，函数的入参是 babel 对象插件本身是一个函数，函数的入参是 babel 对象
- babel-types 包提供的一个工具对象，用于构造、验证以及变换 AST 节点.
- visitor 中会定义遇到某个类型的 Node 执行的操作
- 插件的最基本的结构

```javascript
module.exports = (babel) => {
  return {
    visitor: {
        ...
    }
  }
};
```

# ps

- babel：插件的入参，可以从中拿到 types 对象，操作 AST 节点，由于 types 对象太常用了，babel 大部分情况下写做 {types:t}。
- visitor：插件核心对象，其中定义了插件生效的节点类型，以及生效方式。
- Identifier 等方法名：声明了插件作用的 AST 节点类型，入参是 path 和 state，每个 visitor 可以包含多个这样的方法，每个方法的方法名称都是一种或多种的节点类型。
- path：path 对象代表了当前节点的路径，通过 path 节点可以访获得当前的 node 对象，以及和该路径相关的对象，比如父节点、兄弟节点等。path 对象上还包含一些操作路径的方法等。
- state：表示代码和插件的状态，一般通过该对象访问插件的配置项。

- 节点的构造函数，校验方法，属性类型的等等。这些都定义在 babel-types 包中。具体是定义在 babel-types/src/definitions 目录下
