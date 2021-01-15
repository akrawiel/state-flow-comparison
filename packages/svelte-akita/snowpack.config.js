module.exports = {
  plugins: [
    '@snowpack/plugin-svelte'
  ],
  devOptions: {
    port: 8015,
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
