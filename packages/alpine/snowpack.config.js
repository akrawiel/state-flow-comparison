module.exports = {
  devOptions: {
    port: 8020,
    open: "none",
    output: "stream"
  },
  mount: {
    public: '/',
  },
  optimize: {
    bundle: true,
    minify: true,
    target: 'es2018'
  }
}
