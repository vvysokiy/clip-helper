module.exports = {
  parser: '@typescript-eslint/parser',
  extends: ['airbnb'],
  plugins: ['react', '@typescript-eslint', 'react-hooks', 'cypress'],
  parserOptions: {
    sourceType: 'module',
    ecmaVersion: 2018,
    ecmaFeatures:  {
      jsx:  true,
    },
    // project: 'tsconfig.json'
  },
  settings: {
    'import/core-modules': ['enzyme', 'jest'],
  },
  env: {
    "cypress/globals": true
  },
  rules: {
    'react/react-in-jsx-scope': 0,
    'react/jsx-filename-extension': ['error', { extensions: ['.tsx'] }],
    'react/prop-types': 0,
    'import/no-unresolved': 0,
    'no-unused-vars': 0,
    'import/prefer-default-export': 0,
    'import/no-extraneous-dependencies': 0,
    'no-plusplus': ['error', {allowForLoopAfterthoughts: true}],
    '@typescript-eslint/no-unused-vars': 2,
    "react-hooks/rules-of-hooks": "error", // Checks rules of Hooks
    "react-hooks/exhaustive-deps": "warn", // Checks effect dependencies
    "arrow-parens": [2, "as-needed"],
    "import/extensions": 0
  },
  globals: {
    window: true,
    document: true,
    fetch: true,
    jest: true,
    expect: true,
    test: true,
    __TEST__: true,
    __DEV__: true,
    __SERVER__: true,
    __BROWSER__: true,
    beforeEach: true,
    beforeAll: true,
    afterAll: true,
    afterEach: true,
    describe: true,
    it: true,
    TouchEvent: true
  },
}
