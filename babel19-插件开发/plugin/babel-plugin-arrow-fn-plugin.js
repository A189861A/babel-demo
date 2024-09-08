module.exports = (babel) => {
    return {
        visitor: {
            // Identifier(path, state) {
            //     const node = path.node;
            //     console.log('---Identifier---', path)
            // },
            ArrowFunctionExpression(path) {
                const node = path.node;
                if (node.type === "ArrowFunctionExpression") {
                    node.type = "FunctionExpression";
                }
            }
        }
    }
};