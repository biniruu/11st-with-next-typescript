/**
 *
 * syntaxes
 * https://github.com/postcss/postcss#syntaxes
 *
 * plugins
 * https://github.com/postcss/postcss#plugins
 *
 * postcss-preset-env options
 * https://github.com/csstools/postcss-plugins/tree/main/plugin-packs/postcss-preset-env
 *
 * postcss-preset-env features
 * https://preset-env.cssdb.org/features/
 *
 * additional options in autoprefixer
 * https://github.com/postcss/autoprefixer#options
 */

module.exports = {
  syntax: 'postcss-syntax', //  automatically switch the required PostCSS syntax by file extension/source
  plugins: {
    'postcss-preset-env': {
      autoprefixer: {
        // grid: 'autoplace', // ie 10-11 대응 grid layout 속성 prefix
      },
      features: {
        'nesting-rules': true,
      },
    },
    // tailwindcss: {}, // tailwindcss 사용 시 필요
  },
}
