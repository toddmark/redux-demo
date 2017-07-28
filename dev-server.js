const webpack = require('webpack');
const config = require('./webpack.config.js');
const port = 9000;
config.entry.index.unshift(`webpack-dev-server/client?http://localhost:${port}/`, 
'webpack/hot/only-dev-server',
'react-hot-loader/patch');
const WebpackDevServer = require('webpack-dev-server');
const compiler = webpack(config);
const server = new WebpackDevServer(compiler, {
  hot: true,
  stats: {
    colors: true,
    chunks: false
 }
})

server.listen(port);
console.log(`Listenting at http://localhost:${port}`);
