publicPath: process.env.NODE_ENV === 'production'
module.exports = {
  publicPath: process.env.NODE_ENV === 'production'? '/mqttclient/': '/',
  devServer: {
    port: 8888,
  },
  configureWebpack: {
    devtool: 'cheap-module-eval-source-map',
  },
}
