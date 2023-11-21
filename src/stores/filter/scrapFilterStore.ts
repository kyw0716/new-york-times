import { FilterStore } from './types';

let scrapFilterStore: FilterStore = {
  headline: '',
  date: '',
  countries: [],
};

let listeners: (() => void)[] = [];

export const getScrapFilterStore = () => scrapFilterStore;

export const setScrapFilterStore = (filterStore: FilterStore) => {
  scrapFilterStore = filterStore;

  emitChanges();
};

const emitChanges = () => {
  listeners.forEach((listener) => listener());
};

export const subscribeScrapFilterStore = (listener: () => void) => {
  listeners.push(listener);

  return () => {
    listeners = listeners.filter((l) => l !== listener);
  };
};
