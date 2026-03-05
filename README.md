<h1 align="center">@lionad/nuxt-excalidraw</h1>

> This is a fork of [nuxt-excalidraw](https://github.com/AngeloSchulerPiletti/nuxt-excalidraw) by Angelo Schuler Piletti.

特性：**兼容 Nuxt v4**

<br/>

<p align="center">
  <a href="https://npmjs.com/package/@lionad/nuxt-excalidraw">
    <img alt="@lionad/nuxt-excalidraw is released under the MIT license." src="https://img.shields.io/npm/v/@lionad/nuxt-excalidraw/latest.svg?style=flat&colorA=18181B&colorB=28CF8D"  />
  </a>
  <a href="https://npmjs.com/package/@lionad/nuxt-excalidraw">
    <img alt="@lionad/nuxt-excalidraw is released under the MIT license." src="https://img.shields.io/badge/license-MIT-blue.svg"  />
  </a>
    <img alt="PRs welcome!" src="https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat"  />
</p>

<div align="center">
  <figure>
    <a href="https://excalidraw.com" target="_blank" rel="noopener">
      <img src="https://excalidraw.nyc3.cdn.digitaloceanspaces.com/github%2Fproduct_showcase.png" alt="Product showcase" />
    </a>
    <figcaption>
      <p align="center">
        Add the amazing <a hrer="https://github.com/excalidraw/excalidraw">Excalidraw</a> on your Nuxt 3 project.
      </p>
    </figcaption>
  </figure>
</div>

<h4><a href="https://excalidraw.com" target="_blank" rel="noopener">▶️ See Excalidraw demo</a></h4>

<br/>

## 📌 Features

You can use following APIs:

- ✅ [Props](https://docs.excalidraw.com/docs/@excalidraw/excalidraw/api/props/)
- 🚧 [Children Components](https://docs.excalidraw.com/docs/@excalidraw/excalidraw/api/children-components)
- 🚧 [Utils](https://docs.excalidraw.com/docs/@excalidraw/excalidraw/api/utils)
- 🚧 [Constants](https://docs.excalidraw.com/docs/@excalidraw/excalidraw/api/constants)
- 🚧 [Creating Elements programmatically](https://docs.excalidraw.com/docs/@excalidraw/excalidraw/api/excalidraw-element-skeleton)

Feel free to contribute and get in touch.

## ⚡ Quick Setup

Add `nuxt-excalidraw` dependency to your project

```bash
# Using pnpm
pnpm add -D @lionad/nuxt-excalidraw

# Using yarn
yarn add --dev @lionad/nuxt-excalidraw

# Using npm
npm install --save-dev @lionad/nuxt-excalidraw
```

Add `@lionad/nuxt-excalidraw` to the `modules` section of `nuxt.config.ts`

```js
export default defineNuxtConfig({
  modules: [
    '@lionad/nuxt-excalidraw',
    // other modules
  ]
})
```

🪶 No configuration is necessary

## 👣 Usage

The module injects a component called `ExcalidrawBoard` in your NuxtApp.

The basicest use of it is:

```vue
<script setup lang="ts">
</script>

<template>
  <div>
    <ClientOnly>
      <ExcalidrawBoard />
    </ClientOnly>
  </div>
</template>
```

It is important that you load the component once browser APIs are available.

### Using Props

If you want to use, for example, Excalidraw props [`initialData`](https://docs.excalidraw.com/docs/@excalidraw/excalidraw/api/props/initialdata) and [`onChange`](https://docs.excalidraw.com/docs/@excalidraw/excalidraw/api/props/#onchange), you can do it as following:

```vue
<script setup lang="ts">
import type { ExcalidrawElement } from '@excalidraw/excalidraw/types/element/types'
import type { AppState, BinaryFiles } from '@excalidraw/excalidraw/types/types'

function myCallback(
  elements: readonly ExcalidrawElement[],
  appState: AppState,
  files: BinaryFiles,
) {
  // Do something cool here...
}

const initialDataFromMyService = useMyService().data
</script>

<template>
  <div>
    <ClientOnly>
      <ExcalidrawBoard
        :on-change="myCallback"
        :initial-data="initialDataFromMyService"
      />
    </ClientOnly>
  </div>
</template>
```

<br/>

- [✨ Release Notes](/CHANGELOG.md)
- [🤝 Contributing](/CONTRIBUTING.md)
