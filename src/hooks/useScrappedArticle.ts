import { Article } from '@/components/article/List/ArticleList';
import {
  getScrappedArticles,
  setScrappedArticles,
  subscribeScrappedArticles,
} from '@/stores/article/scrappedArticleStore';
import { useSyncExternalStore } from 'react';
import { useScrapFilter } from './useScrapFilter';
import { COUNTRIES } from '@/components/modal/filter/contstans';

const filterScrappedArticles = (headline: string, date: string, countries: string[]) => {
  const scrappedArticles = getScrappedArticles();

  const filteredArticles = (Object.values(scrappedArticles) as Article[]).filter((article) => {
    const isHeadline =
      headline !== '' ? article.headline.toLowerCase().includes(headline.toLowerCase()) : true;
    const isDate = date !== '' ? article.pub_date.includes(date) : true;
    const isCountries =
      countries.length !== 0
        ? countries.filter((c) => article.countries.includes(c)).length > 0
        : true;

    return isHeadline && isDate && isCountries;
  });

  return filteredArticles;
};

export const useScrappedArticle = () => {
  const scrappedArticle = useSyncExternalStore(subscribeScrappedArticles, getScrappedArticles);
  const { headline, date, countries } = useScrapFilter();
  const scrappedArticleList = filterScrappedArticles(
    headline,
    date,
    countries.map((c) => COUNTRIES[c])
  );

  const scrapArticle = (article: Article) => {
    setScrappedArticles(article, 'add');
  };

  const deleteArticle = (article: Article) => {
    setScrappedArticles(article, 'delete');
  };

  return { scrappedArticle, scrappedArticleList, scrapArticle, deleteArticle };
};
