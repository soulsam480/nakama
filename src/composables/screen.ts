import { ref, onMounted, onBeforeUnmount } from 'vue';

export function useScreenWidth() {
  function getWindowDimensions() {
    const { innerWidth: width } = window;

    return width;
  }

  function handleResize() {
    windowDimensions.value = getWindowDimensions();
  }

  const windowDimensions = ref(getWindowDimensions());

  onMounted(() => window.addEventListener('resize', handleResize));

  onBeforeUnmount(() => () => window.removeEventListener('resize', handleResize));

  return windowDimensions;
}
