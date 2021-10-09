import { LoaderKey } from 'src/types';
import { inject } from 'vue';

export function useLoader() {
  return inject(LoaderKey) as { start(): void; stop(): void };
}
