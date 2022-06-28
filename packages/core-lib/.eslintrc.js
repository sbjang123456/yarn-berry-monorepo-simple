/**
 * Specific eslint rules for this app/package, extends the base rules
 * @see https://github.com/belgattitude/nextjs-monorepo-example/blob/main/docs/about-linters.md
 */

const { getDefaultIgnorePatterns } = require('@sb/eslint-config-bases/helpers');

module.exports = {
  root: true,
  parserOptions: {
    tsconfigRootDir: __dirname,
    project: 'tsconfig.json',
  },
  ignorePatterns: [...getDefaultIgnorePatterns()],
  extends: [
    '@sb/eslint-config-bases/typescript',
    '@sb/eslint-config-bases/regexp',
    '@sb/eslint-config-bases/jest',
    '@sb/eslint-config-bases/rtl',
    '@sb/eslint-config-bases/react',
    // Apply prettier and disable incompatible rules
    '@sb/eslint-config-bases/prettier',
  ],
  rules: {
    // optional overrides per project
  },
  overrides: [
    // optional overrides per project file match
    {
      files: ['**/test-utils.{ts,tsx}'],
      rules: {
        'react/display-name': 'off',
      },
    },
    {
      files: ['**/api/request.ts'],
      rules: {
        '@typescript-eslint/naming-convention': [
          'error',
          {
            selector: ['objectLiteralProperty'],
            format: ['camelCase'],
            filter: {
              regex: '^([a-zA-Z][a-z0-9]*)(-[a-zA-Z0-9]+)*$',
              match: false,
            },
          },
        ],
      },
    },
  ],
};
