// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'

import tailwindcss from "@tailwindcss/vite";

// // https://vite.dev/config/
// export default defineConfig({
//   plugins: [tailwindcss(), react()],
// });


import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { ViteSitemap } from "vite-plugin-sitemap";
import { createHtmlPlugin } from "vite-plugin-html";
import { viteSSG } from "vite-ssg/serialized-data";

const routes = [
  { path: "/", name: "Home" },
  { path: "/about", name: "About" },
];

export default defineConfig({
  plugins: [
    tailwindcss(),
    react(),
    viteSSG({ includedRoutes: () => routes }),
    ViteSitemap({
      baseUrl: "https://yourdomain.com",
      routes,
      generateRobotsTxt: true,
    }),
    createHtmlPlugin({
      minify: true,
      inject: {
        data: {
          title: "Default Title",
          description: "Default Description",
        },
      },
    }),
  ],
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          react: ["react", "react-dom", "react-router-dom"],
        },
      },
    },
  },
});