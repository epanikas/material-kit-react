const path = require('path');
const webpack = require('webpack');

module.exports = {
    mode: "development",
    target: ['web'],
    devtool: "source-map",
    entry: {
        'main': './src/index.js',
        'app': './src/app/App.js'
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'material-kit-2-react.[name].lib.js',
        library: 'material-kit-2-react-[name]',
        libraryTarget: 'umd',
        umdNamedDefine: true
    },
    resolve: {
        alias: {
            'assets': path.resolve(__dirname, 'src/assets'),
            'components': path.resolve(__dirname, 'src/components'),
            'examples': path.resolve(__dirname, 'src/examples'),
            'layouts': path.resolve(__dirname, 'src/layouts'),
            'pages': path.resolve(__dirname, 'src/pages'),
            'app': path.resolve(__dirname, 'src/app')
        },
    },
    plugins: [
        new webpack.ProvidePlugin({
            React: 'react',
        })
    ],
    externals: {      
        react: {          
            commonjs: "react",          
            commonjs2: "react",          
            amd: "React",          
            root: "React"      
        },      
        "react-dom": {          
            commonjs: "react-dom",          
            commonjs2: "react-dom",          
            amd: "ReactDOM",          
            root: "ReactDOM"      
        },
        "react-router-dom": {
            commonjs: "react-router-dom",
            commonjs2: "react-router-dom",
            amd: "ReactRouterDom",
            root: "ReactRouterDom"
        }   
    },
    module: {
        rules: [
            { test: /\.txt$/, use: 'raw-loader' },
            {
                test: /\.(jpe?g|png|gif|svg)$/i,
                loader: 'file-loader',
            },
            {
                test: /(\.js|\.jsx)$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                options: {
                    presets: [
                        '@babel/preset-env',
                        '@babel/preset-typescript',
                        '@babel/preset-react',
                        'react-app'
                    ]
                }
            }
        ],
    },
};