import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
    base: "./",
    build: {
        minify: 'terser',
        cssMinify: true,
        rollupOptions: {
            input: {
                main: resolve(__dirname, 'index.html'),
            },
            output: {
                manualChunks: {
                    vendor: ['src/main.js'],
                },
            },
        },
    },
    css: {
        devSourcemap: true,
    },
    server: {
        open: true,
        host: true,
    },
});
