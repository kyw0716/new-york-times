import {
  getArticleTypeStoreSnapshot,
  setArticleTypeStore,
  subscribeArticleTypeStore,
} from '@/stores/article/articleTypeStore';
import { useSyncExternalStore } from 'react';

export const useArticleType = () => {
  const articleType = useSyncExternalStore(subscribeArticleTypeStore, getArticleTypeStoreSnapshot);

  return { articleType, setArticleTypeStore };
};
