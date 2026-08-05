module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:react-hooks/recommended',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  // The codebase is TypeScript; without this parser ESLint falls back to
  // espree, which cannot parse `interface`, type annotations, or `!`
  // non-null assertions and reports every .ts/.tsx file as a parse error.
  parser: '@typescript-eslint/parser',
  parserOptions: { ecmaVersion: 'latest', sourceType: 'module' },
  settings: { react: { version: '18.2' } },
  plugins: ['react-refresh', '@typescript-eslint'],
  rules: {
    'react/jsx-no-target-blank': 'off',
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
    // TypeScript already enforces unused-variable checks via
    // noUnusedLocals/noUnusedParameters in tsconfig.json; the base rule
    // false-positives on TS-only syntax (e.g. types used only in
    // annotations), so defer to @typescript-eslint's version instead.
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': 'warn',
  },
}
