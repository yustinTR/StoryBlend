import { defineConfig } from "vite";
import twig from 'vite-plugin-twig-drupal';
import { join } from "node:path";

export default defineConfig({
    plugins: [
        twig({
            namespaces: {
                components: join(__dirname, "../components"),
            },
        }),
    ],
    build: {
        rollupOptions: {
            input: {
                'style': join(__dirname, 'src/scss/main.scss'),
                'main': join(__dirname, 'src/js/main.js'),
                'button': join(__dirname, 'components/button/button.scss'),
            },
            output: {
                assetFileNames: '[name].css',
                entryFileNames: '[name].js',
            },
        },
    },
});
