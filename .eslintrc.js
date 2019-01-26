module.exports = {
  parser: 'babel-eslint',
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 6,
    sourceType: 'module'
  },
  extends: ['standard', 'standard-react'],
  plugins: ['react', 'react-native'],
  globals: {
    __DEV__: true
  },
  settings: {
    react: {
      version: '16.4.1'
    }
  },
  rules: {
    'react/prop-types': 0
  }
}
