/// <reference types="vite/client" />

declare module '*.vue' {
  import { DefineComponent } from 'vue';
  // eslint-disable-next-line
  const component: DefineComponent<{}, {}, any>;
  export default component;
}

interface ImportMetaEnv extends Readonly<Record<string, string>> {
  VITE_apiKey: string;
  VITE_authDomain: string;
  VITE_projectId: string;
  VITE_storageBucket: string;
  VITE_messagingSenderId: string;
  VITE_appId: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
