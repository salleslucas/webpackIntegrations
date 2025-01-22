const path = require('path');

module.exports = {
    entry: './src/index.js',
    mode: 'development',
    output: {
            filename: 'bundle.js',
            path: path.resolve(__dirname, './dist')
    },
    module:{
        rules:[
            {
                test: /\.css$/,
                use: [
                    'style-loader', 'css-loader'
                ]
            },
            {
                test: /\.(ttf|woff|woff2|eot|otf)$/,
                type: 'asset/resource',
                generator: {
                    filename: 'fonts/[name][ext]', // Salva as fontes na pasta "fonts"
                },
            },
        ]
    }
}
