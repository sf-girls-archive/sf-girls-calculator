import js from '@eslint/js';
import typescript from '@typescript-eslint/eslint-plugin';

export default [
  {
    ignores: ['dist', 'node_modules']
  },
  js.configs.recommended,
  ...typescript.configs['flat/recommended']
];
