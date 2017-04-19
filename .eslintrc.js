module.exports = {
  root: true,
  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module'
  },
  extends: 'rtablada',
  env: {
    browser: true
  },
  rules: {
    "comma-dangle": ["error", "always-multiline"],
  }
};
