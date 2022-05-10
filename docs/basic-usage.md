# Basic usage

The types declared by.d.ts files do not need to be imported when used, but need to be manually configured in esLint's global option.Referring to the implementation idea of eslintrc in [unplugin-auto-import](https://github.com/antfu/unplugin-auto-import), it will automatically configure declared types in esLint's global option.

### @types/global.d.ts

```ts
declare type AnyObj = {
  [propName: string]: any
}
```

### @types/api.d.ts

```ts
declare namespace ApiTest {
  interface params {
    a: number
  }
  interface data {
    name: string
    age: number
  }
}
```

### @types/store.d.ts

```ts
declare interface Test {
  name: string
  token: string
}
```

### .eslintrc-auto-import-types.json

```json
{
  "globals": {
    "ApiTest": true,
    "AnyObj": true,
    "Test": true
  }
}
```
