const maxParamsRule = {
  // Set max params to 1 to enforce destructured parameters. Set it to 4 for arrow functions to allow callbacks
  'func-params-args/func-params': [
    'error',
    {
      global: 1,
      arrowFuncExpression: 4,
    },
  ],
};

module.exports = {
  configs: {
    recommended: {
      plugins: ['sonarjs'],
      extends: [
        'eslint:recommended',
        'plugin:sonarjs/recommended',
        'prettier',
        'func-params-args',
      ],
      rules: {
        // Other rules
        'arrow-body-style': 'error',
        'arrow-parens': ['error', 'always'],
        'eol-last': 'error',
        'func-style': 'error',
        'linebreak-style': ['error', 'unix'],
        'max-classes-per-file': ['error', 1],
        'no-constant-condition': 'error',
        'no-else-return': 'error',
        'no-empty': 'error',
        'no-multiple-empty-lines': 'error',
        'no-return-await': 'error',
        'no-unneeded-ternary': 'error',
        'prefer-destructuring': 'error',
        'prefer-template': 'error',
        'sort-keys': [
          'error',
          'asc',
          {
            caseSensitive: false,
          },
        ],
        'sort-vars': 'error',
        complexity: 'error',
        curly: 'error',
        ...maxParamsRule,
      },
    },
    typescript: {
      extends: [
        'plugin:@typescript-eslint/eslint-recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:@typescript-eslint/recommended-requiring-type-checking',
        'prettier',
      ],
      rules: {
        //#region TS ESLint rules
        '@typescript-eslint/array-type': ['error', { default: 'array' }],
        '@typescript-eslint/explicit-member-accessibility': [
          'error',
          { accessibility: 'no-public' },
        ],
        // Disabled due to member ordering rule and getters/setters not being able to be grouped together
        '@typescript-eslint/adjacent-overload-signatures': 'off',
        '@typescript-eslint/member-ordering': [
          'error',
          {
            default: {
              memberTypes: [
                // Index signature
                'signature',
                // Fields
                'public-static-field',
                'public-static-get',
                'public-static-set',
                'protected-static-field',
                'protected-static-get',
                'protected-static-set',
                'private-static-field',
                'private-static-get',
                'private-static-set',
                'public-decorated-field',
                'public-decorated-get',
                'public-decorated-set',
                'protected-decorated-field',
                'protected-decorated-get',
                'protected-decorated-set',
                'private-decorated-field',
                'private-decorated-get',
                'private-decorated-set',
                'public-instance-field',
                'public-instance-get',
                'public-instance-set',
                'protected-instance-field',
                'protected-instance-get',
                'protected-instance-set',
                'private-instance-field',
                'private-instance-get',
                'private-instance-set',
                'public-abstract-field',
                'public-abstract-get',
                'public-abstract-set',
                'protected-abstract-field',
                'protected-abstract-get',
                'protected-abstract-set',
                'public-field',
                'public-get',
                'public-set',
                'protected-field',
                'protected-get',
                'protected-set',
                'private-field',
                'private-get',
                'private-set',
                'static-field',
                'static-get',
                'static-set',
                'instance-field',
                'instance-get',
                'instance-set',
                'abstract-field',
                'abstract-get',
                'abstract-set',
                'decorated-field',
                'decorated-get',
                'decorated-set',
                'field',
                'get',
                'set',
                // Constructors
                'public-constructor',
                'protected-constructor',
                'private-constructor',
                'constructor',
                // Methods
                'public-static-method',
                'protected-static-method',
                'private-static-method',
                'public-decorated-method',
                'protected-decorated-method',
                'private-decorated-method',
                'public-instance-method',
                'protected-instance-method',
                'private-instance-method',
                'public-abstract-method',
                'protected-abstract-method',
                'public-method',
                'protected-method',
                'private-method',
                'static-method',
                'instance-method',
                'abstract-method',
                'decorated-method',
                'method',
              ],
              order: 'alphabetically',
            },
          },
        ],
        '@typescript-eslint/naming-convention': [
          'error',
          {
            selector: 'default',
            format: ['camelCase'],
          },
          { selector: 'variable', format: ['camelCase', 'UPPER_CASE'] },
          {
            selector: 'parameter',
            modifiers: ['unused'],
            format: ['camelCase'],
            leadingUnderscore: 'require',
          },
          { selector: 'enumMember', format: ['UPPER_CASE'] },
          {
            selector: 'memberLike',
            modifiers: ['private'],
            format: ['camelCase'],
            leadingUnderscore: 'allow',
          },
          { selector: 'typeLike', format: ['PascalCase'] },
          {
            selector: 'variable',
            modifiers: ['const', 'exported'],
            format: ['PascalCase', 'UPPER_CASE', 'camelCase'],
          },
          {
            selector: [
              'classProperty',
              'objectLiteralProperty',
              'typeProperty',
              'classMethod',
              'objectLiteralMethod',
              'typeMethod',
              'accessor',
              'enumMember',
            ],
            format: null,
            modifiers: ['requiresQuotes'],
          },
        ],
        '@typescript-eslint/no-array-constructor': ['error'],
        '@typescript-eslint/no-explicit-any': 'error',
        '@typescript-eslint/no-shadow': ['error'],
        '@typescript-eslint/no-this-alias': 'error',
        '@typescript-eslint/no-throw-literal': 'error',
        '@typescript-eslint/no-unsafe-member-access': 'error',
        '@typescript-eslint/no-unused-vars': [
          'error',
          { argsIgnorePattern: '^_', ignoreRestSiblings: true },
        ],
        '@typescript-eslint/prefer-readonly': 'error',
        '@typescript-eslint/unbound-method': ['error', { ignoreStatic: true }],
        //#endregion
        //#region ESLint rules
        // Rules deactivated due to conflicts with TS
        'no-array-constructor': 'off', // Handled by @typescript-eslint/no-array-constructor
        'no-shadow': 'off', // Handled by @typescript-eslint/no-shadow
        'no-underscore-dangle': 'off', // Handled by @typescript-eslint/naming-convention
        'no-unused-vars': 'off', // Handled by @typescript-eslint/no-unused-vars
        //#endregion
      },
    },
  },
};
