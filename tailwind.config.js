module.exports = {
  content: ["app/**/*.html.erb", "app/**/*.html.slim", "app/**/*.js", "app/**/*.jsx"],
  darkMode: false, // или 'media' или 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
  paths: {
    styles: ["app/assets/stylesheets/application.tailwind.css"],
    output: "app/assets/builds",
  },
};






