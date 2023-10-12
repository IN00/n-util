import { defineConfig } from 'vitest/config'
import path from 'path'
import tsconfigPaths from 'vite-tsconfig-paths'

export default defineConfig({
  // resolve: {
  //   alias: [
  //     {find: "@/*", replacement: path.resolve(__dirname, './src/*') },
  //   ]
  // },
  plugins: [tsconfigPaths()],
  test: {
    include: ["test/**/*.?(c|m)[jt]s?(x)"],
    globals: true,
  }
})
