module.exports = {
  publicPath: process.env.NODE_ENV === "production" ? "/SkyCast/" : "/",
  configureWebpack: {
    optimization: {
      splitChunks: {
        chunks: 'all'
      }
    }
  },
  devServer: {
    disableHostCheck: true,
  },
};
