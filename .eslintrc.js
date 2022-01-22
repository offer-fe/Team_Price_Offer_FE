module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
    jest: true
  },
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      parserOptions: {
        project: ['tsconfig.json'],
      }
    }
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: ['./tsconfig.json'],
  },
  plugins: ['react', '@typescript-eslint'],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
  ],
  ignorePatterns: ['webpack.config.js','**/*.config.js', '.eslintrc.js', 'api/*.ts'],
  rules: {
    'react/jsx-key': 'off',
    'no-use-before-define': 'off',
    'no-redeclare': 'off',
    "no-unused-vars": "off",
    'react/button-has-type': ['error'],
    'react/jsx-sort-props': [
      'error',
      {
        callbacksLast: true,
        reservedFirst: true
      }
    ],
    '@typescript-eslint/array-type': ['error', { default: 'array' }],
    '@typescript-eslint/ban-tslint-comment': 'error',
    '@typescript-eslint/consistent-indexed-object-style': [
      'error',
      'index-signature'
    ],
    'react/jsx-pascal-case': ['error'],
    'react/react-in-jsx-scope': 'off',
    '@typescript-eslint/consistent-type-definitions': ['error', 'interface'],
    '@typescript-eslint/consistent-type-imports': 'error',
    '@typescript-eslint/explicit-function-return-type': 'error',
    '@typescript-eslint/member-ordering': 'error',
    '@typescript-eslint/method-signature-style': ['error', 'method'],
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/no-for-in-array': 'error',
    '@typescript-eslint/type-annotation-spacing': 'error',
    '@typescript-eslint/no-confusing-void-expression': 'error',
    '@typescript-eslint/no-unused-vars': ['error'],
    '@typescript-eslint/no-use-before-define': ['error'],
    '@typescript-eslint/no-redeclare': 'error',
    '@typescript-eslint/no-magic-numbers': [
      'error',
      {
        ignore: [
          -9, -8, -7, -6, -5, -4, -3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9
        ],
        ignoreArrayIndexes: true,
        ignoreEnums: true
      }
    ],
    '@typescript-eslint/no-unused-expressions': 'off',
    '@typescript-eslint/no-duplicate-imports': 'error',
    '@typescript-eslint/jsx-key': 'off',
    "@typescript-eslint/no-unused-vars": 'off',
    '@typescript-eslint/member-delimiter-style': [
      'error',
      {
        multiline: {
          delimiter: 'comma',
          requireLast: true
        },
        singleline: {
          delimiter: 'comma',
          requireLast: false
        },
        overrides: {
          interface: {
            multiline: {
              delimiter: 'comma',
              requireLast: true
            }
          }
        }
      }
    ],
  },
  settings: {
    react: {
      version: 'detect'
    }
  }
}
