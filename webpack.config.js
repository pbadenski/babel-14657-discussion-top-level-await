module.exports = {
  mode: "development",
  devtool: false,
  entry: [ "./src/main.js" ],
  resolve: {
    extensions: [
      ".js",
      ".mjs"
    ],
  },
  experiments: {
    topLevelAwait: true
  }
}
