module.exports = {
  content: ["*.html", "js/**/*.js"],
  css: ["css/**/*.css"],
  safelist: {
    standard: [
      /^cc--/,
      /^cm__/,
      /^pm__/,
      /^slick-/,
      /^fa-/,
      /^navbar-/,
      /^dropdown-/,
      /^badge-/,
      /^collapse$/,
      /^collapsing$/,
      /^show$/,
      /^active$/,
      /^opened$/,
      /^scrolling$/,
      /^up$/,
    ],
    deep: [/^cc-/, /^slick-/, /^navbar/, /^dropdown/],
  },
};
