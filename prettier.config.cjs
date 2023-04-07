/** @type {import("prettier").Config} */
const config = {
  singleQuote: true,
  trailingComma: 'all',
  arrowParens: 'avoid',
  endOfLine: 'auto',
  plugins: [require.resolve('prettier-plugin-tailwindcss')],
};

module.exports = config;
