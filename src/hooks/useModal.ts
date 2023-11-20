import {
  getModalStoreSnapshot,
  setModalStore,
  subscribeModalStore,
} from '@/stores/modal/modalStore';
import { useSyncExternalStore } from 'react';

export const useModal = () => {
  const modal = useSyncExternalStore(subscribeModalStore, getModalStoreSnapshot);

  const openModal = (modal: React.ReactNode) => {
    setModalStore(modal);
  };

  const closeModal = () => {
    setModalStore(null);
  };

  return {
    modal,
    openModal,
    closeModal,
  };
};
