module.exports = {
  env: {
    browser: true,
    es6: true
  },
  extends: 'eslint:recommended',
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
    d3: true,
    randomColor: true,
    orderedColor: true,
    orderedBaseColor: true,
    randomBaseColor: true,
    $: true,
    watchSidebar: true,
    Typed: true
  },
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module'
  },
  rules: {}
};
