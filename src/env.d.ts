/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_APP_PTX_KEY: string;
  readonly VITE_APP_PTX_ID: string;
  readonly VITE_APP_BASE_URL: string;
  readonly VITE_APP_GOOGLE_MAP_KEY: string;
  readonly VITE_APP_GOOGLE_MAP_URL: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
