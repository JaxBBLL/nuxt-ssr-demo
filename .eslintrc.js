module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  parserOptions: {
    parser: 'babel-eslint',
  },
  extends: ['@nuxtjs', 'plugin:nuxt/recommended'],
  // add your custom rules here
  rules: {
    'space-before-function-paren': 0,
    'vue/singleline-html-element-content-newline': 0,
    'vue/html-self-closing': 0,
    'no-console': 0,
    'vue/multiline-html-element-content-newline': 0,
    'arrow-parens': 0,
    'vue/html-closing-bracket-newline': 0,
    'vue/html-indent': 0,
    'vue/max-attributes-per-line': 0,
  },
}
