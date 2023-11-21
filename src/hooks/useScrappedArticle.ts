import { Article } from '@/components/article/List/ArticleList';
import {
  getScrappedArticles,
  setScrappedArticles,
  subscribeScrappedArticles,
} from '@/stores/article/scrappedArticleStore';
import { useSyncExternalStore } from 'react';

export const useScrappedArticle = () => {
  const scrappedArticle = useSyncExternalStore(subscribeScrappedArticles, getScrappedArticles);

  const scrapArticle = (article: Article) => {
    setScrappedArticles(article, 'add');
  };

  const deleteArticle = (article: Article) => {
    setScrappedArticles(article, 'delete');
  };

  console.log(scrappedArticle);

  return { scrappedArticle, scrapArticle, deleteArticle };
};
