import { defineConfig } from 'vite'
import laravel from 'laravel-vite-plugin'
import eslintPlugin from 'vite-plugin-eslint'
import react from '@vitejs/plugin-react-swc'

export default defineConfig((env) => {
  return  {
    plugins: [
      laravel({
        input: 'resources/js/app.tsx',
        ssr: 'resources/js/ssr.tsx',
        refresh: true
      }),
      react(),
      env.mode !== 'test' && eslintPlugin({
        cache: false,
        include: ['./resources/js/**/*.ts', './resources/js/**/*.tsx'],
        exclude: [],
      }),
    ],
    css: {
      modules: {
        localsConvention: 'camelCaseOnly',
      },
    },
    test: {
      globals: true,
      environment: 'jsdom',
      css: {
        modules: {
          classNameStrategy: 'non-scoped',
        },
      },
    },
  }
})
