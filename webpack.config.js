const path = require('path')

module.export = {
    entry: './src/scripts/index.js',
    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname, 'dist')
    }
}