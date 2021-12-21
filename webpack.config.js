const HtmlWwebPackPlugin = require('html-webpack-plugin');
const path = require('path');

/* se configura webppack para convertir archivos a produccion */
module.exports = {
    entry: './src/main.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    module: {
        rules: [{
                /* le decimos que todas las termineciones de .css lo carge con css-loader y luego lo pase por style-loader  */
                test: /\.css$/i,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.s[ac]ss$/i,
                use: [
                    // Creates `style` nodes from JS strings
                    "style-loader",
                    // Translates CSS into CommonJS
                    "css-loader",
                    // Compiles Sass to CSS
                    "sass-loader",
                ],
            },
            {
                test: /\.html$/i,
                loader: 'html-loader'
            }
        ]
    },
    plugins: [
        new HtmlWwebPackPlugin({
            template: './src/index.html'
        })
    ]
}