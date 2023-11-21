let articleTypeStore: 'default' | 'scrap' = 'default';
let listeners: (() => void)[] = [];

export const getArticleTypeStoreSnapshot = () => articleTypeStore;

export const setArticleTypeStore = (articleType: 'default' | 'scrap') => {
  articleTypeStore = articleType;
  emitChanges();
};

const emitChanges = () => {
  listeners.forEach((l) => l());
};

export const subscribeArticleTypeStore = (listener: () => void) => {
  listeners.push(listener);

  return () => (listeners = listeners.filter((l) => l !== listener));
};
