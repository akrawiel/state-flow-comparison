module.exports = {
  plugins: [
    '@snowpack/plugin-react-refresh'
  ],
  devOptions: {
    port: 8006,
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
