import { defineConfig } from 'vite';
import multiInput from 'rollup-plugin-multi-input';
import styleLint from 'vite-plugin-stylelint';
import eslintPlugin from 'vite-plugin-eslint';
import viteSvgToWebfont from 'vite-svg-2-webfont';

import autoprefixer from 'autoprefixer';
import cssnano from 'cssnano';

import twig from 'vite-plugin-twig-drupal';

import { join, resolve,  } from 'node:path';

export default defineConfig({
  plugins: [
    styleLint({
      include: ['src/**/*.scss', 'components/**/*.scss'],
    }),
    twig({
      namespaces: {
        components: join(__dirname, '../components'),
      },
    }),
    eslintPlugin({
      exclude: ['/virtual:/**', 'node_modules/**'],
      fix: true,
    }),
    viteSvgToWebfont({
      context: resolve(__dirname, 'src/icons'),
    }),
    multiInput.default(),
  ],
  css: {
    postcss: {
      plugins: [
        autoprefixer(),
        cssnano(),
      ],
    },
  },
  build: {
    emptyOutDir: true,
    rollupOptions: {
      input: [
        './components/**/*.scss',
        './components/**/*.js',
        './src/js/*.js',
        {
          main: './src/scss/main.scss',
        },
      ],
      output: {
        entryFileNames:"[name].js",
        chunkFileNames: "[name].js",
        assetFileNames: "[name].[ext]"
      },
    },
  },
});
