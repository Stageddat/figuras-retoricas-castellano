import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
    base: "/recursos-expresivos-castellano/",
    // base: "/",
    plugins: [react()],
    build: {
        outDir: 'dist',
    },
});
