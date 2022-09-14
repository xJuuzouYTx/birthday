const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    entry: './src/index.js', //punto de entrada de la app
    output: {   //donde va a estar el proyecto una vez está preparado
        path: path.resolve(__dirname, 'dist'), //__dirname, donde me encuentro
        filename: 'bundle.js', //Nombre del empaquetado
        publicPath: '/'
    },
    mode: 'development',
    resolve: {
        extensions: ['.js', '.jsx'], //extensiones que se usan el la app
        alias: {
            '@components': path.resolve(__dirname, 'src/components'),
            '@containers': path.resolve(__dirname, 'src/containers'),
            '@styles': path.resolve(__dirname, 'src/styles'),
            '@icons': path.resolve(__dirname, 'src/assets/icons/'),
            '@logos': path.resolve(__dirname, 'src/assets/logos/'),
            '@pages': path.resolve(__dirname, 'src/pages'),
            '@routes': path.resolve(__dirname, 'src/routes'),
            '@hooks': path.resolve(__dirname, 'src/hooks'),
            '@context': path.resolve(__dirname, 'src/context')
        }
    },
    module: { 
        rules: [ 
            {
                test: /\.(js|jsx)$/,  //elementos con los que se va a trabajar
                exclude: /node_modules/,  //excluir todos los que se encuentran en node_modules
                use: {
                    loader: 'babel-loader'  //loader con el que se va a trabajar
                }
            },
            {
                test: /\.html$/,  //elementos con los que se va a trabajar
                use: [
                    {
                        loader: 'html-loader'  //loader con el que se va a trabajar
                    }
                ]
            },
            {
                test: /\.(css|scss)$/,  //elementos con los que se va a trabajar
                use: [
                    "style-loader",  //loader con el que se va a trabajar
                    "css-loader",
                    "sass-loader"
                ]
            },
            {
                test: /\.(png|jp(e*)g|svg|gif)$/, //elementos con los que se va a trabajar
                use: [
                    {
                        loader: 'file-loader',  //loader con el que se va a trabajar
                        options: {
                            name: 'images/[hash]-[name].[ext]',
                        },
                    },
                ],
            }
        ]
    },
    plugins: [ //
        new HtmlWebpackPlugin({
            template: './public/index.html',
            filename: './index.html'
        }),
        new MiniCssExtractPlugin({
            filename: '[name].css'
        })
    ],
    devServer: {
        historyApiFallback: true,
        static: path.join(__dirname, 'dist'),
        port: 3005,
    }

}

/*
npm install babel-loader @babel/core @babel/preset-env @babel/preset-react webpack webpack-cli webpack-dev-server html-loader html-webpack-plugin
*/