module.exports = {
  mode: "development",
  devtool: false,
  target: "node",
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
