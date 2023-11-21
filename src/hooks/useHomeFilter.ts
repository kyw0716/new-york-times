import {
  getHomeFilterStore,
  setHomeFilterStore,
  subscribeHomeFilterStore,
} from '@/stores/filter/homeFilterStore';
import { useSyncExternalStore } from 'react';

export const useHomeFilter = () => {
  const homeFilter = useSyncExternalStore(subscribeHomeFilterStore, getHomeFilterStore);
  const { headline, date, countries } = homeFilter;

  return { headline, date, countries, setHomeFilterStore };
};
