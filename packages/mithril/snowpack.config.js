module.exports = {
  devOptions: {
    port: 8018,
    open: "none",
    output: "stream"
  },
  mount: {
    public: '/',
    src: '/dist'
  },
  experiments: {
    optimize: {
      bundle: true,
      minify: true,
      target: 'es2018'
    }
  }
}
