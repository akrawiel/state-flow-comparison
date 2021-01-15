module.exports = {
  plugins: [
    '@snowpack/plugin-svelte'
  ],
  devOptions: {
    port: 8012,
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
    treeshake: true,
    preload: true,
    target: 'es2018'
  }
}
