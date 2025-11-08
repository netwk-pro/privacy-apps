/* ==========================================================================
eslint.config.mjs

SPDX-License-Identifier: CC-BY-4.0 OR GPL-3.0-or-later
This file is part of Network Pro.
========================================================================== */

import js from '@eslint/js';
import eslintConfigPrettier from 'eslint-config-prettier';
import globals from 'globals';

const GLOBAL_IGNORES = [
  '**/node_modules/**',
  '**/dist/**',
  '**/build/**',
  '**/assets/license/**',
  '**/.vscode/**',
  '**/.venv/**',
  '**/python-venv/**',
  '**/__pycache__/**',
  '**/*.json',
  '**/*.jsonc',
  '**/*.xml',
  '**/package-lock.json',
  '**/package.json',
  '.*', // Ignore dotfiles
];

const GLOBALS = {
  ...globals.browser,
  ...globals.node,
  self: 'readonly',
  location: 'readonly',
  indexedDB: 'readonly',
};

const ESLINT_RULES = {
  ...js.configs.recommended.rules,
  ...eslintConfigPrettier.rules,
  indent: 'off',
  quotes: 'off',
  semi: 'off',
};

export default [
  {
    ignores: GLOBAL_IGNORES,
  },
  {
    files: ['**/*.js', '**/*.mjs', '**/*.cjs'],
    languageOptions: {
      globals: GLOBALS,
      ecmaVersion: 'latest',
      sourceType: 'module',
    },
    rules: ESLINT_RULES,
  },
  eslintConfigPrettier,
];
