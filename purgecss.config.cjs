module.exports = {
  content: ["*.html", "js/**/*.js"],
  css: ["css/**/*.css"],
  safelist: {
    standard: [
      /^cc--/,
      /^cm__/,
      /^pm__/,
      /^navbar-/,
      /^show$/,
      /^active$/,
      /^opened$/,
      /^scrolling$/,
      /^up$/,
      /^mobile-menu-open$/,
    ],
    deep: [/^cc-/, /^navbar/],
    greedy: [/focus-visible/],
  },
};
