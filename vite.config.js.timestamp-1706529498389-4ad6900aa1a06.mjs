// vite.config.js
import path from "path";
import { glob } from "file:///Users/yustintroost/Documents/sites/drupal-yustin/web/themes/custom/StoryBlend/node_modules/glob/dist/esm/index.js";
import twig from "file:///Users/yustintroost/Documents/sites/drupal-yustin/web/themes/custom/StoryBlend/node_modules/vite-plugin-twig-drupal/src/index.js";
import iife from "file:///Users/yustintroost/Documents/sites/drupal-yustin/web/themes/custom/StoryBlend/node_modules/rollup-plugin-iife/index.js";
import autoprefixer from "file:///Users/yustintroost/Documents/sites/drupal-yustin/web/themes/custom/StoryBlend/node_modules/autoprefixer/lib/autoprefixer.js";
import cssnano from "file:///Users/yustintroost/Documents/sites/drupal-yustin/web/themes/custom/StoryBlend/node_modules/cssnano/src/index.js";
import { join } from "node:path";
var __vite_injected_original_dirname = "/Users/yustintroost/Documents/sites/drupal-yustin/web/themes/custom/StoryBlend";
var sassIncludes = [
  '@use "sass:color";',
  '@use "sass:map";'
];
var vite_config_default = {
  plugins: [
    // Parse Twig files in JavaScript.
    twig({
      namespaces: {
        components: join(__vite_injected_original_dirname, "../components")
      }
    }),
    // Preserve the directory names for the CSS files via a custom plugin. Vite does
    // not do this by default.
    // @see https://github.com/rollup/rollup/issues/4724
    // @see https://github.com/vitejs/vite/issues/11424
    // @see https://github.com/vitejs/vite/issues/12072#issuecomment-1528523411
    // @see https://stackblitz.com/edit/vitejs-vite-ryrysk?file=vite.config.ts
    {
      name: "preserveCssFilePaths",
      generateBundle(options, bundle) {
        Object.entries(bundle).forEach(([fileName, fileInfo]) => {
          if (!fileName.includes(".css") || fileInfo.type === "asset")
            return;
          const [bundleKey] = fileInfo?.viteMetadata?.importedCss ?? [];
          if (bundleKey && bundleKey in bundle)
            bundle[bundleKey].fileName = fileName.replace(/\.js$/, "");
        });
      }
    }
  ],
  css: {
    postcss: {
      plugins: [
        autoprefixer({}),
        cssnano({})
      ]
    },
    preprocessorOptions: {
      scss: {
        additionalData: sassIncludes.join("\n")
      }
    }
  },
  build: {
    emptyOutDir: true,
    cssCodeSplit: true,
    outDir: "./dist/assets",
    assetsDir: "",
    rollupOptions: {
      input: {
        // Add your existing entries
        ...glob.sync(path.resolve(__vite_injected_original_dirname, "./components/**/*.{js,scss}"), {
          ignore: [
            // Ignore the stories.
            path.resolve(__vite_injected_original_dirname, "./components/**/*.stories.js")
          ]
        }).reduce((entries, filepath) => {
          let cleanPath = filepath.replace(__vite_injected_original_dirname, "");
          cleanPath = cleanPath.replace(/(\/scss)/g, "/css");
          cleanPath = cleanPath.replace(/(\.scss)/g, ".css");
          cleanPath = cleanPath.replace(/^\//, "");
          entries[cleanPath] = filepath;
          return entries;
        }, {}),
        // Add your additional entry points
        "style": join(__vite_injected_original_dirname, "src/scss/main.scss"),
        "main.js": join(__vite_injected_original_dirname, "src/js/main.js")
      },
      output: {
        entryFileNames: (entry) => {
          return entry.name;
        },
        assetFileNames: "[name].css"
      },
      plugins: [iife()]
    }
  }
};
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcuanMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCIvVXNlcnMveXVzdGludHJvb3N0L0RvY3VtZW50cy9zaXRlcy9kcnVwYWwteXVzdGluL3dlYi90aGVtZXMvY3VzdG9tL2RydXBhbC15dXN0aW4tc3RhcnRlci10aGVtZVwiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiL1VzZXJzL3l1c3RpbnRyb29zdC9Eb2N1bWVudHMvc2l0ZXMvZHJ1cGFsLXl1c3Rpbi93ZWIvdGhlbWVzL2N1c3RvbS9kcnVwYWwteXVzdGluLXN0YXJ0ZXItdGhlbWUvdml0ZS5jb25maWcuanNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL1VzZXJzL3l1c3RpbnRyb29zdC9Eb2N1bWVudHMvc2l0ZXMvZHJ1cGFsLXl1c3Rpbi93ZWIvdGhlbWVzL2N1c3RvbS9kcnVwYWwteXVzdGluLXN0YXJ0ZXItdGhlbWUvdml0ZS5jb25maWcuanNcIjtpbXBvcnQgcGF0aCBmcm9tICdwYXRoJztcbmltcG9ydCB7IGdsb2IgfSBmcm9tICdnbG9iJztcblxuLy8gRW5hYmxlIGhhbmRsaW5nIG9mIFR3aWcgZmlsZXMuXG5pbXBvcnQgdHdpZyBmcm9tICd2aXRlLXBsdWdpbi10d2lnLWRydXBhbCc7XG4vLyBXcmFwIEphdmFTY3JpcHQgZmlsZXMgaW4gYW4gSUlGRSBmb3IgYmV0dGVyIHNjb3Blcy5cbmltcG9ydCBpaWZlIGZyb20gXCJyb2xsdXAtcGx1Z2luLWlpZmVcIjtcblxuLy8gQWRkIFBvc3RDU1MgcGx1Z2lucy5cbmltcG9ydCBhdXRvcHJlZml4ZXIgZnJvbSAnYXV0b3ByZWZpeGVyJztcbmltcG9ydCBjc3NuYW5vIGZyb20gJ2Nzc25hbm8nO1xuaW1wb3J0IHtqb2lufSBmcm9tIFwibm9kZTpwYXRoXCI7XG5cbi8vIEFkZCB0aGUgc2FzcyByZXF1aXJlbWVudHMgYW5kIGFkZCBhbiBvcHRpb25hbCBvdmVycmlkZXMgc2FzcyBmaWxlIGlmIGEgY3VzdG9tXG4vLyB5bWwgZmlsZSBleGlzdHMgZm9yIGl0LlxuY29uc3Qgc2Fzc0luY2x1ZGVzID0gW1xuICAgICdAdXNlIFwic2Fzczpjb2xvclwiOycsXG4gICAgJ0B1c2UgXCJzYXNzOm1hcFwiOycsXG5dO1xuXG4vLyBEZWZpbmUgdGhlIHZpdGUgYnVpbGQgY29uZmlnLlxuZXhwb3J0IGRlZmF1bHQge1xuICAgIHBsdWdpbnM6IFtcbiAgICAgICAgLy8gUGFyc2UgVHdpZyBmaWxlcyBpbiBKYXZhU2NyaXB0LlxuICAgICAgICB0d2lnKHtcbiAgICAgICAgICAgIG5hbWVzcGFjZXM6IHtcbiAgICAgICAgICAgICAgICBjb21wb25lbnRzOiBqb2luKF9fZGlybmFtZSwgXCIuLi9jb21wb25lbnRzXCIpLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgfSksXG5cbiAgICAgICAgLy8gUHJlc2VydmUgdGhlIGRpcmVjdG9yeSBuYW1lcyBmb3IgdGhlIENTUyBmaWxlcyB2aWEgYSBjdXN0b20gcGx1Z2luLiBWaXRlIGRvZXNcbiAgICAgICAgLy8gbm90IGRvIHRoaXMgYnkgZGVmYXVsdC5cbiAgICAgICAgLy8gQHNlZSBodHRwczovL2dpdGh1Yi5jb20vcm9sbHVwL3JvbGx1cC9pc3N1ZXMvNDcyNFxuICAgICAgICAvLyBAc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS92aXRlanMvdml0ZS9pc3N1ZXMvMTE0MjRcbiAgICAgICAgLy8gQHNlZSBodHRwczovL2dpdGh1Yi5jb20vdml0ZWpzL3ZpdGUvaXNzdWVzLzEyMDcyI2lzc3VlY29tbWVudC0xNTI4NTIzNDExXG4gICAgICAgIC8vIEBzZWUgaHR0cHM6Ly9zdGFja2JsaXR6LmNvbS9lZGl0L3ZpdGVqcy12aXRlLXJ5cnlzaz9maWxlPXZpdGUuY29uZmlnLnRzXG4gICAgICAgIHtcbiAgICAgICAgICAgIG5hbWU6ICdwcmVzZXJ2ZUNzc0ZpbGVQYXRocycsXG4gICAgICAgICAgICBnZW5lcmF0ZUJ1bmRsZShvcHRpb25zLCBidW5kbGUpIHtcbiAgICAgICAgICAgICAgICBPYmplY3QuZW50cmllcyhidW5kbGUpLmZvckVhY2goKFtmaWxlTmFtZSwgZmlsZUluZm9dKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIC8vIFNraXBzIGZpbGVzIHRoYXQgYXJlbid0IENTUyBvciBhcmUgYXNzZXQgdHlwZXNcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFmaWxlTmFtZS5pbmNsdWRlcygnLmNzcycpIHx8IGZpbGVJbmZvLnR5cGUgPT09ICdhc3NldCcpIHJldHVybjtcblxuICAgICAgICAgICAgICAgICAgICAvLyBgZmlyc3RJbXBvcnRgIHNob3VsZCBiZSB0aGUga2V5IGluIHRoZSBidW5kbGUgdG8gdGhlXG4gICAgICAgICAgICAgICAgICAgIC8vIGNvcnJlc3BvbmRpbmcgYXNzZXQgZmlsZSB3aGljaCBWaXRlIGhhcyBnZW5lcmF0ZWQuXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IFtidW5kbGVLZXldID0gZmlsZUluZm8/LnZpdGVNZXRhZGF0YT8uaW1wb3J0ZWRDc3MgPz8gW107XG4gICAgICAgICAgICAgICAgICAgIGlmIChidW5kbGVLZXkgJiYgYnVuZGxlS2V5IGluIGJ1bmRsZSlcbiAgICAgICAgICAgICAgICAgICAgICAgIGJ1bmRsZVtidW5kbGVLZXldLmZpbGVOYW1lID0gZmlsZU5hbWUucmVwbGFjZSgvXFwuanMkLywgJycpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgfSxcblxuICAgIF0sXG4gICAgY3NzOiB7XG4gICAgICAgIHBvc3Rjc3M6IHtcbiAgICAgICAgICAgIHBsdWdpbnM6IFtcbiAgICAgICAgICAgICAgICBhdXRvcHJlZml4ZXIoe30pLFxuICAgICAgICAgICAgICAgIGNzc25hbm8oe30pLFxuICAgICAgICAgICAgXSxcbiAgICAgICAgfSxcbiAgICAgICAgcHJlcHJvY2Vzc29yT3B0aW9uczoge1xuICAgICAgICAgICAgc2Nzczoge1xuICAgICAgICAgICAgICAgIGFkZGl0aW9uYWxEYXRhOiBzYXNzSW5jbHVkZXMuam9pbignXFxuJyksXG4gICAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgIH0sXG4gICAgYnVpbGQ6IHtcbiAgICAgICAgZW1wdHlPdXREaXI6IHRydWUsXG4gICAgICAgIGNzc0NvZGVTcGxpdDogdHJ1ZSxcbiAgICAgICAgb3V0RGlyOiAnLi9kaXN0L2Fzc2V0cycsXG4gICAgICAgIGFzc2V0c0RpcjogJycsXG4gICAgICAgIHJvbGx1cE9wdGlvbnM6IHtcbiAgICAgICAgICAgIGlucHV0OiB7XG4gICAgICAgICAgICAgICAgLy8gQWRkIHlvdXIgZXhpc3RpbmcgZW50cmllc1xuICAgICAgICAgICAgICAgIC4uLmdsb2Iuc3luYyhwYXRoLnJlc29sdmUoX19kaXJuYW1lLCAnLi9jb21wb25lbnRzLyoqLyoue2pzLHNjc3N9JyksIHtcbiAgICAgICAgICAgICAgICAgICAgaWdub3JlOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBJZ25vcmUgdGhlIHN0b3JpZXMuXG4gICAgICAgICAgICAgICAgICAgICAgICBwYXRoLnJlc29sdmUoX19kaXJuYW1lLCAnLi9jb21wb25lbnRzLyoqLyouc3Rvcmllcy5qcycpLFxuICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIH0pLnJlZHVjZSgoZW50cmllcywgZmlsZXBhdGgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgLy8gUmVtb3ZlIHRoZSBkaXJlY3RvcnkgbmFtZSBmcm9tIHRoZSBmaWxlcGF0aC5cbiAgICAgICAgICAgICAgICAgICAgbGV0IGNsZWFuUGF0aCA9IGZpbGVwYXRoLnJlcGxhY2UoX19kaXJuYW1lLCAnJyk7XG4gICAgICAgICAgICAgICAgICAgIC8vIFJlcGxhY2VzIFwiL3Njc3NcIiBmb2xkZXIgd2l0aCBcIi9jc3NcIi5cbiAgICAgICAgICAgICAgICAgICAgY2xlYW5QYXRoID0gY2xlYW5QYXRoLnJlcGxhY2UoLyhcXC9zY3NzKS9nLCAnL2NzcycpO1xuICAgICAgICAgICAgICAgICAgICAvLyBSZXBsYWNlcyB0aGUgXCIuc2Nzc1wiIGV4dGVuc2lvbiB3aXRoIFwiLmNzc1wiIHRvIHByZXZlbnQgdGhlXG4gICAgICAgICAgICAgICAgICAgIC8vIFwiSW52YWxpZCBsb2FkZXIgdmFsdWU6IHNjc3NcIiBlcnJvci5cbiAgICAgICAgICAgICAgICAgICAgY2xlYW5QYXRoID0gY2xlYW5QYXRoLnJlcGxhY2UoLyhcXC5zY3NzKS9nLCAnLmNzcycpO1xuICAgICAgICAgICAgICAgICAgICAvLyBSZW1vdmUgdGhlIGxlYWRpbmcgc2xhc2guXG4gICAgICAgICAgICAgICAgICAgIGNsZWFuUGF0aCA9IGNsZWFuUGF0aC5yZXBsYWNlKC9eXFwvLywgJycpO1xuXG4gICAgICAgICAgICAgICAgICAgIGVudHJpZXNbY2xlYW5QYXRoXSA9IGZpbGVwYXRoO1xuXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBlbnRyaWVzO1xuICAgICAgICAgICAgICAgIH0sIHt9KSxcblxuICAgICAgICAgICAgICAgIC8vIEFkZCB5b3VyIGFkZGl0aW9uYWwgZW50cnkgcG9pbnRzXG4gICAgICAgICAgICAgICAgJ3N0eWxlJzogam9pbihfX2Rpcm5hbWUsICdzcmMvc2Nzcy9tYWluLnNjc3MnKSxcbiAgICAgICAgICAgICAgICAnbWFpbi5qcyc6IGpvaW4oX19kaXJuYW1lLCAnc3JjL2pzL21haW4uanMnKSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBvdXRwdXQ6IHtcbiAgICAgICAgICAgICAgICBlbnRyeUZpbGVOYW1lczogKGVudHJ5KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIC8vIFJlbW92ZSB0aGUgaGFzaCBmb3IgdGhlIGJ1aWxkIGZpbGVzLlxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZW50cnkubmFtZTtcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGFzc2V0RmlsZU5hbWVzOiAnW25hbWVdLmNzcycsXG5cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBwbHVnaW5zOiBbaWlmZSgpXSxcbiAgICAgICAgfSxcblxuICAgIH0sXG59O1xuIl0sCiAgIm1hcHBpbmdzIjogIjtBQUErYyxPQUFPLFVBQVU7QUFDaGUsU0FBUyxZQUFZO0FBR3JCLE9BQU8sVUFBVTtBQUVqQixPQUFPLFVBQVU7QUFHakIsT0FBTyxrQkFBa0I7QUFDekIsT0FBTyxhQUFhO0FBQ3BCLFNBQVEsWUFBVztBQVhuQixJQUFNLG1DQUFtQztBQWV6QyxJQUFNLGVBQWU7QUFBQSxFQUNqQjtBQUFBLEVBQ0E7QUFDSjtBQUdBLElBQU8sc0JBQVE7QUFBQSxFQUNYLFNBQVM7QUFBQTtBQUFBLElBRUwsS0FBSztBQUFBLE1BQ0QsWUFBWTtBQUFBLFFBQ1IsWUFBWSxLQUFLLGtDQUFXLGVBQWU7QUFBQSxNQUMvQztBQUFBLElBQ0osQ0FBQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBUUQ7QUFBQSxNQUNJLE1BQU07QUFBQSxNQUNOLGVBQWUsU0FBUyxRQUFRO0FBQzVCLGVBQU8sUUFBUSxNQUFNLEVBQUUsUUFBUSxDQUFDLENBQUMsVUFBVSxRQUFRLE1BQU07QUFFckQsY0FBSSxDQUFDLFNBQVMsU0FBUyxNQUFNLEtBQUssU0FBUyxTQUFTO0FBQVM7QUFJN0QsZ0JBQU0sQ0FBQyxTQUFTLElBQUksVUFBVSxjQUFjLGVBQWUsQ0FBQztBQUM1RCxjQUFJLGFBQWEsYUFBYTtBQUMxQixtQkFBTyxTQUFTLEVBQUUsV0FBVyxTQUFTLFFBQVEsU0FBUyxFQUFFO0FBQUEsUUFDakUsQ0FBQztBQUFBLE1BQ0w7QUFBQSxJQUNKO0FBQUEsRUFFSjtBQUFBLEVBQ0EsS0FBSztBQUFBLElBQ0QsU0FBUztBQUFBLE1BQ0wsU0FBUztBQUFBLFFBQ0wsYUFBYSxDQUFDLENBQUM7QUFBQSxRQUNmLFFBQVEsQ0FBQyxDQUFDO0FBQUEsTUFDZDtBQUFBLElBQ0o7QUFBQSxJQUNBLHFCQUFxQjtBQUFBLE1BQ2pCLE1BQU07QUFBQSxRQUNGLGdCQUFnQixhQUFhLEtBQUssSUFBSTtBQUFBLE1BQzFDO0FBQUEsSUFDSjtBQUFBLEVBQ0o7QUFBQSxFQUNBLE9BQU87QUFBQSxJQUNILGFBQWE7QUFBQSxJQUNiLGNBQWM7QUFBQSxJQUNkLFFBQVE7QUFBQSxJQUNSLFdBQVc7QUFBQSxJQUNYLGVBQWU7QUFBQSxNQUNYLE9BQU87QUFBQTtBQUFBLFFBRUgsR0FBRyxLQUFLLEtBQUssS0FBSyxRQUFRLGtDQUFXLDZCQUE2QixHQUFHO0FBQUEsVUFDakUsUUFBUTtBQUFBO0FBQUEsWUFFSixLQUFLLFFBQVEsa0NBQVcsOEJBQThCO0FBQUEsVUFDMUQ7QUFBQSxRQUNKLENBQUMsRUFBRSxPQUFPLENBQUMsU0FBUyxhQUFhO0FBRTdCLGNBQUksWUFBWSxTQUFTLFFBQVEsa0NBQVcsRUFBRTtBQUU5QyxzQkFBWSxVQUFVLFFBQVEsYUFBYSxNQUFNO0FBR2pELHNCQUFZLFVBQVUsUUFBUSxhQUFhLE1BQU07QUFFakQsc0JBQVksVUFBVSxRQUFRLE9BQU8sRUFBRTtBQUV2QyxrQkFBUSxTQUFTLElBQUk7QUFFckIsaUJBQU87QUFBQSxRQUNYLEdBQUcsQ0FBQyxDQUFDO0FBQUE7QUFBQSxRQUdMLFNBQVMsS0FBSyxrQ0FBVyxvQkFBb0I7QUFBQSxRQUM3QyxXQUFXLEtBQUssa0NBQVcsZ0JBQWdCO0FBQUEsTUFDL0M7QUFBQSxNQUNBLFFBQVE7QUFBQSxRQUNKLGdCQUFnQixDQUFDLFVBQVU7QUFFdkIsaUJBQU8sTUFBTTtBQUFBLFFBQ2pCO0FBQUEsUUFDQSxnQkFBZ0I7QUFBQSxNQUVwQjtBQUFBLE1BQ0EsU0FBUyxDQUFDLEtBQUssQ0FBQztBQUFBLElBQ3BCO0FBQUEsRUFFSjtBQUNKOyIsCiAgIm5hbWVzIjogW10KfQo=
