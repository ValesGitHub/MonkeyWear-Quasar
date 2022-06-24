import { computed } from '@vue/reactivity';
import { ref } from 'vue';
import { Cookies } from 'quasar';

const favoriteArray = ref<string[]>();
const favoriteArrayProxy = computed(() => favoriteArray.value || []);

export function useFavoriteProducts() {
  if (!Cookies.get('favorites')) {
    Cookies.set('favorites', '[]');
  }
  if (!favoriteArray.value) {
    favoriteArray.value = Cookies.get('favorites');
  }

  function toggleFavoriteState(id: string) {
    if (!favoriteArrayProxy.value.includes(id)) {
      Cookies.set(
        'favorites',
        JSON.stringify([...favoriteArrayProxy.value, id])
      );
    } else {
      Cookies.set('favorites', JSON.stringify([]));
    }
    favoriteArray.value = Cookies.get('favorites');
  }

  return { favoriteArray: favoriteArrayProxy, toggleFavoriteState };
}
