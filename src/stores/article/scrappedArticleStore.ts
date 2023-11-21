import { Article } from '@/components/article/List/ArticleList';
import { LOCAL_STORAGE_KEY_SCRAPPED_ARTICLES } from '@/constants/localStorage';

if (localStorage.getItem(LOCAL_STORAGE_KEY_SCRAPPED_ARTICLES) === undefined) {
  localStorage.setItem(LOCAL_STORAGE_KEY_SCRAPPED_ARTICLES, JSON.stringify({}));
}

let scrappedArticleStore = JSON.parse(
  localStorage.getItem(LOCAL_STORAGE_KEY_SCRAPPED_ARTICLES) ?? '{}'
);
let listeners: (() => void)[] = [];

export const getScrappedArticles = () => {
  return scrappedArticleStore;
};

export const setScrappedArticles = (article: Article, action: 'add' | 'delete') => {
  if (action === 'add') {
    scrappedArticleStore = { ...scrappedArticleStore, [article.id]: article };
    console.log(scrappedArticleStore);

    localStorage.setItem(LOCAL_STORAGE_KEY_SCRAPPED_ARTICLES, JSON.stringify(scrappedArticleStore));
  }

  if (action === 'delete') {
    delete scrappedArticleStore[article.id];

    scrappedArticleStore = { ...scrappedArticleStore };

    localStorage.setItem(LOCAL_STORAGE_KEY_SCRAPPED_ARTICLES, JSON.stringify(scrappedArticleStore));
  }

  emitChanges();
};

export const emitChanges = () => {
  listeners.forEach((listener) => listener());
};

export const subscribeScrappedArticles = (listener: () => void) => {
  listeners.push(listener);

  return () => {
    listeners = listeners.filter((l) => l !== listener);
  };
};
