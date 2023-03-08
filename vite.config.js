import { defineConfig } from 'vite';

export default defineConfig({
    css: {
        preprocessorOptions: {
            scss: {},
        },
    },
    base: '/movieDB/',
    build: {
        minify: false,
    },
});
