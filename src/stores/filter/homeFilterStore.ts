import { FilterStore } from './types';

let homeFilterStore: FilterStore = {
  headline: '',
  date: '',
  countries: [],
};

let listeners: (() => void)[] = [];

export const getHomeFilterStore = () => homeFilterStore;

export const setHomeFilterStore = (filterStore: FilterStore) => {
  homeFilterStore = filterStore;

  emitChanges();
};

const emitChanges = () => {
  listeners.forEach((listener) => listener());
};

export const subscribeHomeFilterStore = (listener: () => void) => {
  listeners.push(listener);

  return () => {
    listeners = listeners.filter((l) => l !== listener);
  };
};
