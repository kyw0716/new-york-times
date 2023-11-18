import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

export default function Home() {
  const { data } = useQuery({
    queryKey: ['search-articles'],
    queryFn: async () => {
      const response = await axios.get(
        `https://api.nytimes.com/svc/search/v2/articlesearch.json?q=election&api-key=${process.env.NEXT_PUBLIC_NEW_YORK_TIMES_API_KEY}&fq=glocations:("SOUTH KOREA")`
      );

      return response.data;
    },
    select: (data) => {
      // TODO: 데이터 타입 정의 해보기
      return data.response.docs.map((d: any) => {
        return {
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

  return <div>홈</div>;
}
