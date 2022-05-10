# auto-import-types

[![NPM version](https://img.shields.io/npm/v/auto-import-types?color=a1b858&label=)](https://www.npmjs.com/package/auto-import-types)

Auto Import Types on-demand for Vite. With TypeScript support. The implementation idea by [unplugin-auto-import](https://github.com/antfu/unplugin-auto-import).It will automatically configure declared types in esLint's global option.

## Install

`npm i auto-import-types`

## Setup

```ts
// vite.config.ts
import { defineConfig } from 'vite'
import AutoImportTypes from 'auto-import-types'

export default defineConfig({
  plugins: [AutoImportTypes()],
})
```

```js
// .eslintrc.js
module.exports = {
  extends: ['.eslintrc-auto-import-types.json'],
}
```

## Config Options

```ts
type ESLintGlobalsPropValue = boolean | 'readonly' | 'readable' | 'writable' | 'writeable'

interface ESLintConfigs {
  globals: Record<string, ESLintGlobalsPropValue>
}

type Options = Partial<{
  dtsDir: string
  filepath: string
  globalsPropValue: ESLintGlobalsPropValue
}>

const defaultOptions = {
  dtsDir: 'src/@types',
  filepath: '.eslintrc-auto-import-types.json',
  globalsPropValue: true,
}
```
