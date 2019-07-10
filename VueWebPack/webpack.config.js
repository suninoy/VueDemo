const path = require('path') //绝对路径
const HTMLPlugin = require('html-webpack-plugin')
const webpack = require('webpack')
const isDev = process.env.NODE_ENV !=='production'
const echart = require('echarts')
console.log(isDev)
const {
    VueLoaderPlugin
} = require('vue-loader');
const config= {
    target:'web',
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
                test:/\.(woff|ttf)$/,
                use:['file-loader']
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
        new webpack.DefinePlugin({
            'process.env':{
                NODE_DEV:isDev?'"development"':'"production"'//1.区分环境（开发或正式）2.webpack会根据环境选择源代码进行打包
            }
        }),
        new HTMLPlugin(),
        new VueLoaderPlugin()


    ]
}

if(isDev){
 config.devtool = '#cheap-module-eval-source-map',//映射vue文件代码
 config.devServer = {
     port:'8080',
     host:'0.0.0.0',//如果设置成localhost 则无法通过IP访问
    //  overlay:{
    //      //编译过程中出错显示在网页上
    //      errors:true,
    //  },
    // open:true,//启动时自动打开浏览器
     //historyFallback:{
         //没有映射的地址映射到index.html
     //},
     hot:true//不刷新页面 只刷新更改的组件 热加载
 },
 config.plugins.push(
     new webpack.HotModuleReplacementPlugin(),
     new webpack.NoEmitOnErrorsPlugin()
 )
}

module.exports = config