import ArticleList, { Article } from '@/components/ArticleList/ArticleList';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

export default function Home() {
  const { data, isPending, isError } = useQuery<Article[]>({
    queryKey: ['search-articles'],
    queryFn: async () => {
      const response = await axios.get(
        `https://api.nytimes.com/svc/search/v2/articlesearch.json?q=election&api-key=${process.env.NEXT_PUBLIC_NEW_YORK_TIMES_API_KEY}&fq=glocations:("SOUTH KOREA")`
      );

      return response.data.response.docs;
    },
    select: (data) => {
      // TODO: 데이터 타입 정의 해보기
      return data.map((d: any) => {
        return {
          id: d._id,
          headline: d.headline.main,
          organization: d.source,
          reporter: d.byline.original,
          web_url: d.web_url,
          pub_date: d.pub_date,
        };
      });
    },
  });

  console.log(data);

  if (isPending) {
    return <>로딩중...</>;
  }

  if (isError) {
    return <>에러 발생</>;
  }

  return (
    <div>
      <ArticleList articles={data} />
    </div>
  );
}
