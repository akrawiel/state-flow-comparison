module.exports = {
  devOptions: {
    port: 8017,
    open: "none",
    output: "stream"
  },
  mount: {
    public: '/',
    src: '/dist'
  },
  optimize: {
    bundle: true,
    minify: true,
    target: 'es2018'
  }
}
