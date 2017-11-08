// http://eslint.org/docs/user-guide/configuring

module.exports = {
  root: true,
  parser: 'babel-eslint',
  parserOptions: {
    sourceType: 'module'
  },
  env: {
    browser: true,
    es6: true,
    node: true
  },
  // https://github.com/feross/standard/blob/master/RULES.md#javascript-standard-style
  extends: 'standard',
  // required to lint *.vue files
  plugins: [
    "vue"
  ],
  // add your custom rules here
  'rules': {
    "arrow-parens": 0,
    "indent": ["error", 4, { "SwitchCase": 1 }],
    "eol-last": 0,
    "semi": ["error", "always"],
    "space-before-function-paren": 0,
    "no-useless-escape": 0,
    "no-tabs":"off"
  }
}
