const path = require('path')
const process = require("process")
module.exports = {
    mode: process.env.NODE_ENV,
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
        filename: process.env.NODE_ENV === "production" ? "jevent.min.js" : "jevent.js",
        path: path.resolve(__dirname, 'dist'),
        libraryTarget: 'umd'
    }
}