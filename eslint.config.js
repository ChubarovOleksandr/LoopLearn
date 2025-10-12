import js from '@eslint/js';
import tseslint from '@typescript-eslint/eslint-plugin';
import tsParser from '@typescript-eslint/parser';
import reactPlugin from 'eslint-plugin-react';
import reactHooksPlugin from 'eslint-plugin-react-hooks';
import reactRefreshPlugin from 'eslint-plugin-react-refresh';
import simpleImportSort from 'eslint-plugin-simple-import-sort';
import globals from 'globals';

export default [
  js.configs.recommended,
  {
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        ecmaFeatures: { jsx: true },
        project: './tsconfig.eslint.json',
      },
      globals: { ...globals.browser },
    },
    files: ['**/*.{js,jsx,ts,tsx}'],
    plugins: {
      react: reactPlugin,
      'react-hooks': reactHooksPlugin,
      'react-refresh': reactRefreshPlugin,
      '@typescript-eslint': tseslint,
      'simple-import-sort': simpleImportSort,
    },
    settings: {
      react: { version: 'detect' },
    },
    rules: {
      'react/react-in-jsx-scope': 'off',
      'react/jsx-uses-react': 'off',
      'react/jsx-no-target-blank': 'off',
      'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],
      'react-hooks/rules-of-hooks': 'error',
      'react-hooks/exhaustive-deps': 'warn',
      'no-unused-vars': 'off',
      '@typescript-eslint/no-unused-vars': [
        'error',
        {
          argsIgnorePattern: '^_',
          varsIgnorePattern: '^_',
          ignoreRestSiblings: true,
        },
      ],
      '@typescript-eslint/no-explicit-any': 'warn',

      'sort-imports': 'off',
      'simple-import-sort/imports': [
        'error',
        {
          groups: [
            ['^node:'], // Node.js builtins
            ['^\\u0000'], // Side effect imports
            ['^@?\\w'], // External packages (включая scoped @packages)
            [
              '^@components/',
              '^@enums/',
              '^@context/',
              '^@layouts/',
              '^@pages/',
              '^@providers/',
              '^@utils/',
            ],
            ['^src/'], // Internal imports без алиасов
            ['^\\.\\.(?!/?$)', '^\\.\\./?$'], // Родительские импорты
            ['^\\./(?=.*/)(?!/?$)', '^\\.(?!/?$)', '^\\./?$'], // Сиблинг импорты
            ['^.+\\.s?css$'], // Стили
          ],
        },
      ],
      'simple-import-sort/exports': 'error',
    },
  },
];
