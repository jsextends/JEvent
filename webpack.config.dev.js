const path = require('path')
module.exports = {
    mode: "development",
    module: {
        rules: [{
            test: /\.(js|jsx)$/,
            use: 'babel-loader',
            exclude: /node_modules/,
            include: [
                path.resolve(__dirname, "src"),
            ],
        }]
    },
    entry: './src/index.js',
    output: {
        filename: 'jevent.js',
        path: path.resolve(__dirname, 'dist'),
        libraryTarget: 'umd'
    }
}