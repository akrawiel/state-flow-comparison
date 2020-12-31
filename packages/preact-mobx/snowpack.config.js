module.exports = {
  plugins: [
    '@prefresh/snowpack'
  ],
  devOptions: {
    port: 8007,
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
  },
  alias: {
    "react": "preact/compat",
    "react-dom": "preact/compat"
  }
}
