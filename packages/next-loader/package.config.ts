import path from 'node:path'
import baseConfig from '@repo/package.config'
import {defineConfig} from '@sanity/pkg-utils'

const MODULE_PATHS_WHICH_USE_CLIENT_DIRECTIVE_SHOULD_BE_ADDED = [
  path.join('src', 'client-components', 'live', 'index.ts'),
]

const MODULE_PATHS_WHICH_USE_SERVER_DIRECTIVE_SHOULD_BE_ADDED = [
  path.join('src', 'server-actions', 'index.ts'),
]

export default defineConfig({
  ...baseConfig,
  rollup: {
    output: {
      banner: (chunkInfo) => {
        if (
          MODULE_PATHS_WHICH_USE_CLIENT_DIRECTIVE_SHOULD_BE_ADDED.find((modulePath) =>
            chunkInfo.facadeModuleId?.endsWith(modulePath),
          )
        ) {
          return `"use client"`
        }
        if (
          MODULE_PATHS_WHICH_USE_SERVER_DIRECTIVE_SHOULD_BE_ADDED.find((modulePath) =>
            chunkInfo.facadeModuleId?.endsWith(modulePath),
          )
        ) {
          return `"use server"`
        }
        return ''
      },
    },
  },
  extract: {
    rules: {
      'ae-forgotten-export': 'error',
      'ae-incompatible-release-tags': 'warn',
      'ae-internal-missing-underscore': 'off',
      'ae-missing-release-tag': 'warn',
    },
  },
})
