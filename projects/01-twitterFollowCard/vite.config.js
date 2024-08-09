import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// vite.config.js

export default defineConfig({
  esbuild: {
    jsxFactory: 'h',
    jsxFragment: 'Fragment',
    jsxInject: `import React from 'react'`,
},
plugins: [react()],
})