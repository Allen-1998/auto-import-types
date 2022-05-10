# Getting started

## Install

`npm i auto-import-types`

## Setup

```ts
// vite.config.ts
import { defineConfig } from 'vite'
import AutoImport from 'unplugin-auto-import/vite'
import AutoImportTypes from 'auto-import-types'

export default defineConfig({
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
    },
  },
  plugins: [
    AutoImport({
      imports: [
        'pinia',
        {
          '@/helper/auto-import-types': ['useStore'], // !important
        },
      ],
    }),
    AutoImportTypes(),
  ],
})
```

## Config Options

```ts
type Options = Partial<{
  storeDir: string
  excludes: string[]
  outputFile: string
}>

const defaultOptions = {
  storeDir: 'src/store',
  excludes: ['index'],
  outputFile: 'src/helper/auto-import-types.ts',
}
```
