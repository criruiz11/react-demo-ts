import path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';

module.exports = {
    entry: "./src/index.tsx",
    
    output: {
        path: path.resolve(__dirname, './dist'),
        publicPath: "/static/",
    },
    
    mode: process.env.NODE_ENV || 'development',
    
    resolve: {
        extensions: [".tsx", ".ts", ".js"]
    },

    devtool: "inline-source-map",
    
    devServer: {
        open: true,
        hot: true,
        liveReload: true
    },

    module: {
        rules: [
            {
                test: /\.(ts|js)x?$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: [
                            "@babel/preset-env",
                            "@babel/preset-react",
                            "@babel/preset-typescript",
                        ]
                    }
                }
            },
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            },
            {
                test: /\.(jpg|png)$/,
                use: ['file-loader']
            },
        ]
    },
  
    plugins: [
        new HtmlWebpackPlugin({
            template: "src/index.html"
        })
    ]
};