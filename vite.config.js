import { defineConfig } from "vite";
import multiInput from "rollup-plugin-multi-input";
import styleLint from 'vite-plugin-stylelint';
import esLint from 'vite-plugin-eslint';

import autoprefixer from 'autoprefixer';
import cssnano from 'cssnano';

import twig from 'vite-plugin-twig-drupal';
// Wrap JavaScript files in an IIFE for better scopes.
import iife from "rollup-plugin-iife";
import scss from "rollup-plugin-scss";
import {join} from "node:path";

export default defineConfig({
  plugins: [
    styleLint({
      lintOnStart: true,
      build: true,
      fix: true,
      include: ['src/**/*.scss', 'components/**/*.scss'],
    }),
    // Parse Twig files in JavaScript.
    twig({
      namespaces: {
        components: join(__dirname, "../components"),
      },
    }),
    esLint({
      exclude: ['/virtual:/**', 'node_modules/**'],
      fix: true,
    }),
    multiInput.default(),
  ],
  css: {
    postcss: {
      plugins: [
        autoprefixer({fix: true,}),
        cssnano({}),
      ],
    },
  },
  build: {
    emptyOutDir: true,
    rollupOptions: {
      exclude: ['./components/**/*.stories.js'],
      input: [
        "./components/**/*.js",
        "./src/js/*.js",
        {
          main: "./src/scss/main.scss",
        }
      ],
      output: {
        entryFileNames: "[name].js",
        chunkFileNames: "[name].js",
        assetFileNames: (chunkInfo) => {
          if (chunkInfo.name === 'main') {
            return 'scss/[name].scss';
          } else {
            return `components/[name]/[name].scss`;
          }
        },
      },
    },
    plugins: [
      scss(),
      iife()
    ],
  },
});
