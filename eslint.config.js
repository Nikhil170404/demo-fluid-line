import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'

export default [
  {
    ignores: ['dist/**', 'node_modules/**'],
  },
  {
    files: ['**/*.{js,jsx}'],
    languageOptions: {
      ecmaVersion: 2020,
      globals: {
        ...globals.browser,
        ...globals.es2020,
        // Add global variables that are commonly used
        console: 'readonly',
        window: 'readonly',
        document: 'readonly',
        navigator: 'readonly',
        localStorage: 'readonly',
        sessionStorage: 'readonly',
        setTimeout: 'readonly',
        setInterval: 'readonly',
        clearTimeout: 'readonly',
        clearInterval: 'readonly',
        performance: 'readonly',
        // Google Analytics
        gtag: 'readonly',
        // Node.js globals for build scripts
        process: 'readonly',
        Buffer: 'readonly',
        global: 'readonly',
        __dirname: 'readonly',
        __filename: 'readonly',
        module: 'readonly',
        require: 'readonly',
        exports: 'readonly',
      },
      parserOptions: {
        ecmaVersion: 'latest',
        ecmaFeatures: { jsx: true },
        sourceType: 'module',
      },
    },
    plugins: {
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
    },
    extends: [js.configs.recommended],
    rules: {
      ...reactHooks.configs.recommended.rules,
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true },
      ],
      // Custom rules for better code quality
      'no-unused-vars': [
        'error', 
        { 
          varsIgnorePattern: '^[A-Z_]',
          argsIgnorePattern: '^_',
          ignoreRestSiblings: true,
        }
      ],
      'no-console': ['warn', { allow: ['warn', 'error'] }],
      'prefer-const': 'error',
      'no-var': 'error',
      'object-shorthand': 'error',
      'prefer-template': 'error',
      'prefer-arrow-callback': 'error',
      'arrow-spacing': 'error',
      'no-duplicate-imports': 'error',
      'no-useless-constructor': 'error',
      'no-useless-rename': 'error',
      'rest-spread-spacing': 'error',
      'template-curly-spacing': 'error',
      // React specific rules
      'react-hooks/exhaustive-deps': 'warn',
    },
  },
  // Specific configuration for main.jsx to allow error boundary patterns
  {
    files: ['src/main.jsx'],
    rules: {
      'react-refresh/only-export-components': 'off',
      'no-unused-vars': 'off',
    },
  },
  // Configuration for config files
  {
    files: ['*.config.js', 'src/config/*.js'],
    languageOptions: {
      globals: {
        ...globals.node,
        process: 'readonly',
      },
    },
    rules: {
      'no-console': 'off',
    },
  },
]