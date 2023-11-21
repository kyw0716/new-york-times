import {
  getScrapFilterStore,
  setScrapFilterStore,
  subscribeScrapFilterStore,
} from '@/stores/filter/scrapFilterStore';
import { useSyncExternalStore } from 'react';

export const useScrapFilter = () => {
  const homeFilter = useSyncExternalStore(subscribeScrapFilterStore, getScrapFilterStore);
  const { headline, date, countries } = homeFilter;

  return { headline, date, countries, setScrapFilterStore };
};
