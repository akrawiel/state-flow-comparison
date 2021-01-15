module.exports = {
  plugins: [
    '@snowpack/plugin-react-refresh'
  ],
  devOptions: {
    port: 8009,
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
