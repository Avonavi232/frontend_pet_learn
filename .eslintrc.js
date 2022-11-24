module.exports = {
  env: {
    browser: true,
    es2021: true,
    jest: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
    'airbnb',
    'plugin:react/jsx-runtime',
    'plugin:storybook/recommended',
    'plugin:react-hooks/recommended',
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
      code: 120,
      ignoreComments: true,
    }],
    'i18next/no-literal-string': ['error', {
      mode: 'jsx-text-only',
    }],
    '@typescript-eslint/no-shadow': 'error',
    'no-unused-vars': 'off',
    'no-shadow': 'off',
    'import/prefer-default-export': 'off',
    'react/prop-types': 'off',
    'import/extensions': 'off',
    'react/require-default-props': 'off',
    'import/no-unresolved': 'off',
    'react/destructuring-assignment': 'off',
    'no-underscore-dangle': 'off',
    'react/jsx-pascal-case': 'off',
    'no-param-reassign': 'off',
    'no-use-before-define': 'off',
    '@typescript-eslint/no-use-before-define': 'error',
    '@typescript-eslint/no-unused-vars': 'error',
  },
  overrides: [
    {
      files: ['**/src/**/*.{test,stories}.{ts,tsx}'],
      rules: {
        'i18next/no-literal-string': 'off',
        'max-len': [2, {
          code: 130,
          ignoreComments: true,
        }],
      },
    },
    {
      files: ['**/src/**/*.stories.{ts,tsx}'],
      rules: {
        'react/jsx-props-no-spreading': 'off',
      },
    },
    {
      files: ['**/*.js'],
      rules: {
        '@typescript-eslint/no-var-requires': 'off',
      },
    },
  ],
  globals: {
    __IS_DEV__: true,
    __API__: true,
  },
};
