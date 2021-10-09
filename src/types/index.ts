import { InjectionKey } from 'vue';

export interface User {
  id: string;
  email: string;
  name: string;
  image: string;
}

export const LoaderKey: InjectionKey<{
  start(): void;
  stop(): void;
}> = Symbol();
