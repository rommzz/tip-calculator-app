const { GenerateSW } = require("workbox-webpack-plugin");

module.exports = {
  transpileDependencies: [
    'vuetify'
  ],
	publicPath: process.env.NODE_ENV === "development" ? "/vuejs-pwa/" : "",

  configureWebpack: {
    plugins: [new GenerateSW()]
  }
}
