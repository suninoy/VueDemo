const path = require('path') //绝对路径
const {
    VueLoaderPlugin
} = require('vue-loader');
module.exports = {
    entry: path.join(__dirname, 'src/index.js'), //入口
    output: {
        filename: 'bundle.js',
        path: path.join(__dirname, 'dist')
    },
    module: {
        rules: [{
                test: /\.vue$/,
                loader: 'vue-loader'
            },
            {
                test: /\.css$/,
                use: [
                    'style-loader','css-loader']
            }
            ,{
                test:/\.styl/,//css预处理器
                use:['style-loader','css-loader','stylus-loader']
            }
            ,{
                test:/\.(gif|jpg|jpeg|png|svg)$/,
                use:[
                    {
                        loader:'url-loader',//转化成base64代码
                        options:{
                            limit:1024,
                            name:'[name].[ext]'
                        }
                    }
                ]
            }
        ]
    },
    plugins: [

        new VueLoaderPlugin()

    ]
}