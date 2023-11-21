import { API_END_POINT_ARTICLE_SEARCH } from '@/constants/query';

export const getFqRequestParams = (headline: string, countries: string) => {
  const fqRequestParams = [];

  if (headline !== '') {
    fqRequestParams.push(`headline:("${headline}")`);
  }

  if (countries !== '') {
    fqRequestParams.push(`glocations:(${countries})`);
  }

  const fqRequestParam =
    fqRequestParams.join(' AND ') !== '' ? `&fq=${fqRequestParams.join(' AND ')}` : '';

  return fqRequestParam;
};

export const getRequestUrl = (
  headline: string,
  date: string,
  countries: string,
  pageParam: number
) => {
  const isParamsEmpty = !headline && !date && !countries;

  if (isParamsEmpty) {
    return `${API_END_POINT_ARTICLE_SEARCH}&page=${pageParam}`;
  }

  const fqRequestParam = getFqRequestParams(headline, countries);
  const dateRequestParam = date !== '' ? `&begin_date=${date}&end_date=${date}` : '';

  return `${API_END_POINT_ARTICLE_SEARCH}&page=${pageParam}${fqRequestParam}${dateRequestParam}`;
};
