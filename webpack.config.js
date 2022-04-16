const path = require('path')
module.exports = {
    mode: "production",
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
        filename: 'jevent.min.js',
        path: path.resolve(__dirname, 'dist'),
        libraryTarget: 'umd'
    }
}