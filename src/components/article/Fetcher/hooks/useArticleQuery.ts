import { useQuery } from '@tanstack/react-query';
import { Article } from '../../List/ArticleList';
import axios from 'axios';
import { getHomeFilterStore } from '@/stores/filter/homeFilterStore';
import { COUNTRIES } from '@/components/modal/filter/contstans';
import { QUERY_KEY_ARTICLE_SEARCH } from '@/constants/query';
import { getRequestUrl } from '../tools/articleSearchQueryTools';

interface ArticleKeyword {
  name: string;
  value: string;
}

export const useArticleQuery = () => {
  return useQuery<Article[]>({
    queryKey: [QUERY_KEY_ARTICLE_SEARCH],
    queryFn: async () => {
      const headline = getHomeFilterStore().headline;
      const date = getHomeFilterStore().date.replace(/-/g, '');
      const countries = getHomeFilterStore()
        .countries.map((country) => `"${COUNTRIES[country]}"`)
        .join(',');

      const requestUrl = getRequestUrl(headline, date, countries);
      const response = await axios.get(requestUrl);

      return response.data.response.docs;
    },
    select: (data) => {
      // TODO: 데이터 타입 정의 해보기
      return data.map((d: any) => {
        const person = d.byline.person[0];
        const name = person ? `${person.firstname} ${person.lastname}` : '';
        const countries = d.keywords
          .filter((keyword: ArticleKeyword) => keyword.name === 'glocations')
          .map((keyword: ArticleKeyword) => keyword.value);

        return {
          id: d._id,
          headline: d.headline.main,
          organization: d.source,
          reporter: name,
          web_url: d.web_url,
          pub_date: d.pub_date,
          countries,
        };
      });
    },
  });
};
