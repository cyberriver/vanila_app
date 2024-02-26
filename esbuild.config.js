const path = require('path');
const tailwindcss = require('tailwindcss');

module.exports = {
  entryPoints: ['app/javascript/application.js'],
  bundle: true,
  outfile: 'app/assets/builds/application-esbuild.js',
  format: 'esm',
  watch: true,
  publicPath: '/assets/',
  plugins: [tailwindcss('app/assets/stylesheets/application.tailwind.css')],
};
