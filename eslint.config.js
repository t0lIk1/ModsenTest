import tseslint from 'typescript-eslint'
import js from '@eslint/js'
import globals from 'globals'
import react from 'eslint-plugin-react'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import importPlugin from 'eslint-plugin-import'
import jsxA11y from 'eslint-plugin-jsx-a11y'
import prettier from 'eslint-plugin-prettier/recommended'
import { fileURLToPath } from 'url'
import { dirname } from 'path'
import simpleImportSort from 'eslint-plugin-simple-import-sort'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

export default tseslint.config(
  { ignores: ['dist'] },
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      js.configs.recommended,
      ...tseslint.configs.recommended,
      react.configs.flat.recommended,
      importPlugin.flatConfigs.recommended,
      jsxA11y.flatConfigs.recommended,
      prettier
    ],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser
    },

    plugins: {
      'simple-import-sort': simpleImportSort,
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh
    },
    settings: {
      react: {
        version: 'detect'
      },
      'import/resolver': {
        alias: {
          map: [['@', './src']],
          extensions: ['.ts', '.tsx', '.js', '.jsx', '.json']
        }
      }
    },
    rules: {
      'prettier/prettier': [
        'error',
        {
          endOfLine: 'auto'
        }
      ],

      '@typescript-eslint/no-unused-vars': 'off',
      'simple-import-sort/imports': 'error',
      'simple-import-sort/exports': 'error',
      'import/extensions': 'off',
      'react/prop-types': 'off',
      'no-console': ['off'],
      'react/button-has-type': 'error',
      'react/react-in-jsx-scope': ['off'],
      '@typescript-eslint/no-explicit-any': ['off'],
      'react-refresh/only-export-components': 'off'
    }
  }
)
