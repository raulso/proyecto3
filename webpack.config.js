const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/app.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  plugins:[
    new HtmlWebpackPlugin({
      filename:'index.html',
      template:'./src/index.html'
    })
  ],
  module:{
    rules:[
      {test:/\.css$/,use:['style-loader','css-loader']},
      {test:/\.js$/,use: ["source-map-loader"],enforce: "pre"},
      {test:/\.json$/,loader: 'json-loader'},
      {test: /\.js$/, exclude: /node_modules/, loader: "babel-loader"},
      {test: /\.(png|svg|jpg|jpeg|gif|geojson)$/i,type: 'asset/resource' }
    ]
  },
  devServer:{
    static:'./dist'
  }
 
}