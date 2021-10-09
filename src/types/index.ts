import { InjectionKey } from 'vue';

export interface User {
  id: string;
  email: string;
  name: string;
  image: string;
}
interface Message {
  id: string;
  message: string;
  owner: string;
  on: Date;
}

export interface Chat {
  from: string;
  to: string;
  messages: Message[];
  on: Date;
}

export const LoaderKey: InjectionKey<{
  start(): void;
  stop(): void;
}> = Symbol();
