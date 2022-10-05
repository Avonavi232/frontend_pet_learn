module.exports = {
  env: {
    browser: true,
    es2021: true,
    jest: true,
  },
  extends: [
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'airbnb',
    'plugin:react/jsx-runtime',
    'plugin:storybook/recommended',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['react', 'i18next'],
  rules: {
    'react/jsx-filename-extension': [2, {
      extensions: ['tsx', 'jsx'],
    }],
    'react/function-component-definition': [2, {
      namedComponents: ['function-declaration', 'arrow-function'],
    }],
    'import/no-extraneous-dependencies': ['error', {
      devDependencies: true,
    }],
    'max-len': [2, {
      code: 100,
      ignoreComments: true,
    }],
    'i18next/no-literal-string': ['error', {
      mode: 'jsx-text-only',
    }],
    '@typescript-eslint/no-shadow': 'error',
    'no-unused-vars': 'warn',
    'no-shadow': 'off',
    'import/prefer-default-export': 'off',
    'react/prop-types': 'off',
    'import/extensions': 'off',
    'react/require-default-props': 'off',
    'import/no-unresolved': 'off',
    'react/destructuring-assignment': 'off',
    'no-underscore-dangle': 'off',
    'react/jsx-pascal-case': 'off',
  },
  overrides: [
    {
      files: ['**/src/**/*.test.{ts,tsx}'],
      rules: {
        'i18next/no-literal-string': 'off',
      },
    },
    {
      files: ['**/src/**/*.stories.{ts,tsx}'],
      rules: {
        'react/jsx-props-no-spreading': 'off',
      },
    },

  ],
};
