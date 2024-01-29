import path from 'path';
import { glob } from 'glob';

// Enable handling of Twig files.
import twig from 'vite-plugin-twig-drupal';
// Wrap JavaScript files in an IIFE for better scopes.
import iife from "rollup-plugin-iife";

// Add PostCSS plugins.
import autoprefixer from 'autoprefixer';
import cssnano from 'cssnano';

// Add the sass requirements and add an optional overrides sass file if a custom
// yml file exists for it.
const sassIncludes = [
    '@use "sass:color";',
    '@use "sass:map";',
    '@import "./node_modules/breakpoint-sass/stylesheets/_breakpoint.scss";',
    '@import "./storybook/assets/scss/utils/_variables.scss";',
    '@import "./storybook/assets/scss/utils/_mixins.scss";',
];

// Define the vite build config.
export default {
    plugins: [
        // Parse Twig files in JavaScript.
        twig({
            namespaces: {
                components: path.resolve(__dirname, './storybook/components/'),
                elements: path.resolve(__dirname, './storybook/elements/'),
                structures: path.resolve(__dirname, './storybook/structures/'),
            },
        }),

        // Preserve the directory names for the CSS files via a custom plugin. Vite does
        // not do this by default.
        // @see https://github.com/rollup/rollup/issues/4724
        // @see https://github.com/vitejs/vite/issues/11424
        // @see https://github.com/vitejs/vite/issues/12072#issuecomment-1528523411
        // @see https://stackblitz.com/edit/vitejs-vite-ryrysk?file=vite.config.ts
        {
            name: 'preserveCssFilePaths',
            generateBundle(options, bundle) {
                Object.entries(bundle).forEach(([fileName, fileInfo]) => {
                    // Skips files that aren't CSS or are asset types
                    if (!fileName.includes('.css') || fileInfo.type === 'asset') return;

                    // `firstImport` should be the key in the bundle to the
                    // corresponding asset file which Vite has generated.
                    const [bundleKey] = fileInfo?.viteMetadata?.importedCss ?? [];
                    if (bundleKey && bundleKey in bundle)
                        bundle[bundleKey].fileName = fileName.replace(/\.js$/, '');
                });
            },
        },

    ],
    css: {
        postcss: {
            plugins: [
                autoprefixer({}),
                cssnano({}),
            ],
        },
        preprocessorOptions: {
            scss: {
                additionalData: sassIncludes.join('\n'),
            },
        },
    },
    build: {
        emptyOutDir: true,
        cssCodeSplit: true,
        outDir: './assets',
        assetsDir: '',
        rollupOptions: {
            input: glob.sync(path.resolve(__dirname, './storybook/**/*.{js,scss}'), {
                ignore: [
                    // Ignore the stories.
                    path.resolve(__dirname, './storybook/**/*.stories.js'),
                    // Ignore the SASS utils.
                    path.resolve(__dirname, './storybook/assets/scss/utils/**')
                ],
            }).reduce((entries, filepath) => {
                // Remove the directory name from the filepath.
                let cleanPath = filepath.replace(__dirname, '');

                // Remove "storybook" folder from the path.
                cleanPath = cleanPath.replace(/(\/storybook)/g, '');
                // Remove "assets" folder from the path.
                cleanPath = cleanPath.replace(/(\/assets)/g, '');
                // Replaces "/scss" folder with "/css".
                cleanPath = cleanPath.replace(/(\/scss)/g, '/css');
                // Replaces the ".scss" extension with ".css" to prevent the
                // "Invalid loader value: scss" error.
                cleanPath = cleanPath.replace(/(\.scss)/g, '.css');
                // Remove the leading slash.
                cleanPath = cleanPath.replace(/^\//, '');

                entries[cleanPath] = filepath;

                return entries;
            }, {}),
            output: {
                entryFileNames: (entry) => {
                    // Remove the hash for the build files.
                    return entry.name;
                },
            },
            plugins: [iife()],
        },
    },
};