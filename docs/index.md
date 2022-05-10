# Getting started

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
