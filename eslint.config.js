// @ts-check
const eslint = require('@eslint/js');
const tseslint = require('typescript-eslint');
const angular = require('angular-eslint');
const prettier = require('eslint-config-prettier');
const prettierPlugin = require('eslint-plugin-prettier');
const importPlugin = require('eslint-plugin-import');
const simpleImportSort = require('eslint-plugin-simple-import-sort');

module.exports = tseslint.config(
  {
    files: ['**/*.ts'],
    extends: [
      eslint.configs.recommended,
      ...tseslint.configs.recommended,
      ...tseslint.configs.stylistic,
      ...angular.configs.tsRecommended,
      prettier,
    ],
    plugins: {
      prettier: prettierPlugin,
      import: importPlugin,
      'simple-import-sort': simpleImportSort,
    },
    processor: angular.processInlineTemplates,
    rules: {
      '@angular-eslint/component-selector': [
        'error',
        {
          type: 'element',
          prefix: 'app',
          style: 'kebab-case',
        },
      ],
      '@angular-eslint/directive-selector': [
        'error',
        {
          type: 'attribute',
          prefix: 'app',
          style: 'camelCase',
        },
      ],
      '@typescript-eslint/explicit-function-return-type': [
        'error',
        {
          allowExpressions: false,
          allowTypedFunctionExpressions: true,
          allowHigherOrderFunctions: true,
        },
      ],
      '@typescript-eslint/explicit-member-accessibility': [
        'error',
        {
          accessibility: 'explicit',
          overrides: {
            constructors: 'no-public',
          },
        },
      ],
      '@typescript-eslint/member-ordering': [
        'error',
        {
          default: [
            // Index signature
            'signature',

            // Fields
            'private-static-field',
            'protected-static-field',
            'public-static-field',

            'private-instance-field',
            'protected-instance-field',
            'public-instance-field',

            // Constructors
            'private-constructor',
            'protected-constructor',
            'public-constructor',

            // Methods
            'private-static-method',
            'protected-static-method',
            'public-static-method',

            'private-instance-method',
            'protected-instance-method',
            'public-instance-method',
          ],
        },
      ],
      'import/no-duplicates': 'error',
      'import/order': [
        'error',
        {
          'newlines-between': 'never',
          groups: [
            'builtin',
            'external',
            'internal',
            'parent',
            'sibling',
            'index',
          ],
          alphabetize: { order: 'asc', caseInsensitive: true },
        },
      ],
      'no-console': 'error',
      'prettier/prettier': 'error',
      'simple-import-sort/exports': 'error',
      'sort-keys': [
        'error',
        'asc',
        {
          caseSensitive: false,
          natural: true,
          minKeys: 2,
        },
      ],
    },
  },
  {
    files: ['**/*.html'],
    extends: [
      ...angular.configs.templateRecommended,
      ...angular.configs.templateAccessibility,
    ],
    rules: {},
  },
);
