import { ReactNode } from 'react';

let modalStore: ReactNode | null = null;
let listeners: (() => void)[] = [];

export const getModalStoreSnapshot = () => modalStore;

export const setModalStore = (store: ReactNode) => {
  modalStore = store;
  emitChanges();
};

const emitChanges = () => {
  listeners.forEach((l) => l());
};

export const subscribeModalStore = (listener: () => void) => {
  listeners.push(listener);

  return () => (listeners = listeners.filter((l) => l !== listener));
};
