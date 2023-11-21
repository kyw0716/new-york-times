import {
  countriesConverter,
  dateConverter,
  headlineConverter,
} from '@/components/layout/Header/tools';
import { useArticleType } from './useArticleType';
import { useHomeFilter } from './useHomeFilter';
import { useScrapFilter } from './useScrapFilter';

export const useFilter = () => {
  const { articleType } = useArticleType();

  const {
    headline: homeHeadline,
    date: homeDate,
    countries: homeCountries,
    setHomeFilterStore,
  } = useHomeFilter();
  const {
    headline: scrapHeadline,
    date: scrapDate,
    countries: scrapCountries,
    setScrapFilterStore,
  } = useScrapFilter();

  const headline =
    articleType === 'default' ? headlineConverter(homeHeadline) : headlineConverter(scrapHeadline);
  const date = articleType === 'default' ? dateConverter(homeDate) : dateConverter(scrapDate);
  const countries =
    articleType === 'default'
      ? countriesConverter(homeCountries)
      : countriesConverter(scrapCountries);

  const countriesArray = articleType === 'default' ? homeCountries : scrapCountries;
  const setFilters = articleType === 'default' ? setHomeFilterStore : setScrapFilterStore;

  return { headline, date, countries, countriesArray, setFilters };
};
