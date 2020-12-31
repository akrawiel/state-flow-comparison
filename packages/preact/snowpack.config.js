module.exports = {
  plugins: [
    '@prefresh/snowpack'
  ],
  devOptions: {
    port: 8011,
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
