<script setup lang="ts">
import { onMounted, useTemplateRef } from 'vue'
import React from 'react'
import '@excalidraw/excalidraw/index.css'

interface Props {
  initialData?: any
  viewModeEnabled?: boolean
  theme?: string
  UIOptions?: any
}

const props = defineProps<Props>()

const excalidrawRef = useTemplateRef<HTMLDivElement>('excalidrawRoot')

onMounted(async () => {
  if (!excalidrawRef.value) return

  const [{ Excalidraw }, ReactDOM] = await Promise.all([
    import('@excalidraw/excalidraw'),
    import('react-dom/client'),
  ])

  const reactProps: Record<string, any> = {
    ...(props.viewModeEnabled !== undefined && { viewModeEnabled: props.viewModeEnabled }),
    ...(props.theme !== undefined && { theme: props.theme }),
    ...(props.UIOptions !== undefined && { UIOptions: props.UIOptions }),
  }

  if (props.initialData) {
    reactProps.initialData = {
      ...props.initialData,
      appState: {
        ...props.initialData.appState,
        zoom: { value: 1 },
      },
    }
  }

  const root = ReactDOM.createRoot(excalidrawRef.value)
  root.render(React.createElement(Excalidraw, reactProps))
})
</script>

<template>
  <div ref="excalidrawRoot" class="excalidraw-board" />
</template>

<style scoped>
.excalidraw-board {
  min-height: 100%;
  height: 90dvh;
}
</style>
