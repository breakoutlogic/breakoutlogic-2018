const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

const isDev = process.env.NODE_ENV === 'development';

module.exports = {
    entry: [path.resolve('./src/index.js')],
    devtool: isDev ? 'inline-source-map' : 'source-map',
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['react', ['env', {
                            "target": {
                                "browsers": ["last 2 versions", "ie >= 9"]
                            }
                        }]]
                    }
                }
            },
            {
                test: /\.scss$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'sass-loader'
                ]
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/,
                use: {
                    loader: 'file-loader',
                    options: {
                        outputPath: 'images/',
                        name: '[name].[hash].[ext]'
                    }
                }
            },
            {
                test: /(.htaccess)$/,
                use: {
                    loader: 'file-loader',
                    options: {
                        name: '[name]'
                    }
                }
            }
        ]
    },
    plugins: [
        new CleanWebpackPlugin(['public']),
        new MiniCssExtractPlugin({
            filename: 'css/[name].[hash].css'
        }),
        new HtmlWebpackPlugin({
            template: 'src/index.html',
            filename: 'index.html'
        })
        
    ],
    output: {
        path: path.resolve('./public'),
        filename: 'js/[name].[hash].js'
    },
    resolve: {
        extensions: ['.js', '.jsx']
    }
};