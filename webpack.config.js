var path    = require('path');
var hwp     = require('html-webpack-plugin');
const webpack = require('webpack');
module.exports = {
    entry: path.join(__dirname, '/src/index.js'),
    output: {
        filename: 'build.js',
        path: path.join(__dirname, '/public')
    },
    module:{
        rules:[
            {
                exclude: /node_modules/,
                test: /\.(js|jsx|tsx|ts)$/,
                loader: 'babel-loader',
                include: path.resolve(__dirname, 'src')
            },
			{
				test: /\.(css)$/,
				use: ['style-loader', 'css-loader']
            },
			{
				test: /\.(ico|png|jpg|jpeg|gif|svg|woff|woff2|ttf|eot)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
				loader: 'url-loader',
				options: {
					publicPath: './',
					name: 'fonts/[hash].[ext]',
					limit: 10000,
				},
			}
        ]
    },
    plugins:[
        new hwp({template:path.join(__dirname, './public/index.html')})
    ],
    resolve: {
        extensions: ['.js', '.jsx', '.ts', '.tsx']
    },
    devServer: {
        contentBase: path.join(__dirname, 'public'),
        compress: true,
        port: 9000
    }
}