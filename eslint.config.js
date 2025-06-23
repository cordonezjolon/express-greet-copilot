module.exports = [
  {
    files: ["**/*.js"],
    languageOptions: {
      ecmaVersion: 2021,
      sourceType: "commonjs",
    },
    linterOptions: {
      reportUnusedDisableDirectives: true,
    },
    rules: {
      // Add your custom rules here
    },
    plugins: {},
  },
];
