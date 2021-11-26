import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import viteSvgIcons from "vite-plugin-svg-icons";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    viteSvgIcons({
      // Specify the icon folder to be cached
      iconDirs: [path.resolve(process.cwd(), "src/assets/icons")],
      // Specify symbolId format
      symbolId: "[name]"
    })
  ],
  resolve: {
    alias: {
      "@/": path.resolve(__dirname, "./src"),
      "@/components": path.resolve(__dirname, "./src/components"),
      "@/styles": path.resolve(__dirname, "./src/styles"),
      "@/utils": path.resolve(__dirname, "./src/utils"),
      "@/assets": path.resolve(__dirname, "./src/assets"),
      "@/pages": path.resolve(__dirname, "./src/pages"),
      "@/routes": path.resolve(__dirname, "./src/routes"),
      "@/hooks": path.resolve(__dirname, "./src/hooks"),
      "@/context": path.resolve(__dirname, "./src/context")
    }
  }
});
