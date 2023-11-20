import { ReactNode } from 'react';

let modalStore: ReactNode | null = null;
const listeners: (() => void)[] = [];

export const subscribeModalStore = (listener: () => void) => {
  listeners.push(listener);

  return () => listeners.filter((l) => l !== listener);
};

export const getModalStoreSnapshot = () => modalStore;

const emitChanges = () => {
  listeners.forEach((l) => l());
};

export const setModalStore = (store: ReactNode) => {
  modalStore = store;
  emitChanges();
};
