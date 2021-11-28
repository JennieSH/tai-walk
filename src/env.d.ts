/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_APP_PTX_KEY: string;
  readonly VITE_APP_PTX_ID: string;
  readonly VITE_APP_BASE_URL: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
