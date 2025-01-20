/**
 * .eslint.js
 *
 * ESLint configuration file.
 */
import pluginVue from 'eslint-plugin-vue'
import vueTsEslintConfig from '@vue/eslint-config-typescript'

export default [
  {
    name: 'app/files-to-lint',
    files: ['**/*.{ts,mts,tsx,vue}']
  },
  {
    name: 'app/files-to-ignore',
    ignores: ['**/dist/**', '**/dist-ssr/**', '**/coverage/**']
  },
  ...pluginVue.configs['flat/recommended'],
  ...vueTsEslintConfig(),
  {
    rules: {
      'object-curly-spacing': ['error', 'always'],
      'newline-before-return': 'error',
      'indent': ['error', 2],
      'eol-last': ['error', 'always'],
      'comma-dangle': ['error', 'never'],
      '@typescript-eslint/no-explicit-any': 'off',
      'no-multiple-empty-lines': ['error', { max: 1 }],
      '@typescript-eslint/no-unused-expressions': [
        'error',
        {
          allowShortCircuit: true,
          allowTernary: true
        }
      ],
      'vue/no-v-html': 'off',
      'vue/multi-word-component-names': 'off',
      "vue/html-closing-bracket-newline": [
        'error',
        {
          singleline: 'never',
          multiline: 'never',
          selfClosingTag: {
            singleline: 'never',
            multiline: 'never'
          }
        }
      ]
    } 
  }
]
