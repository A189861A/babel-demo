module.exports = (babel) => {
    return {
        visitor: {
            // Identifier(path, state) {
            //     const node = path.node;
            //     console.log('---Identifier---', path)
            // },
            VariableDeclaration(path) {
                const { node } = path;
                if ( node.kind === "let" || node.kind === "const"){
                    node.kind = "var";
                }
            }
        }
    }
};