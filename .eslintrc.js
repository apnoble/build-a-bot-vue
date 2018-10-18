module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    'plugin:vue/essential',
    '@vue/airbnb',
  ],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'comma-dangle': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-trailing-spaces': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-param-reassign': 0,
  },
  parserOptions: {
    parser: 'babel-eslint',
  },
};
