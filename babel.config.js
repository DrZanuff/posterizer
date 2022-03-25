module.exports = {
  presets: [['next/babel']],
  plugins: [['babel-plugin-styled-components', { minify: false, ssr: true }]],

  env: {
    production: {
      plugins: [
        [
          'babel-plugin-styled-components',
          { ssr: true, displayName: false, minify: true },
        ],
      ],
    },
  },
}
