module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  parserOptions: {
    parser: '@babel/eslint-parser',
    requireConfigFile: false
  },
  extends: [
    '@nuxtjs',
    'plugin:nuxt/recommended'
  ],
  plugins: [
  ],
  // add your custom rules here
  rules: {
    semi: ['error', 'always'],
    'arrow-parens': ['warn', 'always'],
    'object-shorthand': ['warn', 'always'],
    'space-before-function-paren': ['off'],
    'vue/max-attributes-per-line': ['off'],
    'vue/html-closing-bracket-newline': ['off'],
    'vue/html-indent': ['off'],
    'vue/html-self-closing': ['warn', {
      html: {
        void: 'always',
        normal: 'never',
        component: 'always'
      },
      svg: 'always',
      math: 'always'
    }],
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off'
  }
};
