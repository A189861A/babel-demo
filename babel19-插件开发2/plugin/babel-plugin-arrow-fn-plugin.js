module.exports = ({types:t}) => {
    return {
        visitor: {
            ArrowFunctionExpression(path) {
                const node = path.node;

                if (node.type === "ArrowFunctionExpression") {

                    const body = path.get("body");
                    console.log('---paht---', body)
                    const bodyNode = body.node;

                    if (bodyNode.type !== 'BlockStatement') {
                        const statements = [];
                        statements.push(t.returnStatement(bodyNode));
                        node.body = t.blockStatement(statements);
                    }

                    node.type = "FunctionExpression";
                }
            }
        }
    }
};