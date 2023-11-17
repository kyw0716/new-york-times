import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

export default function Scrap() {
  const { data } = useQuery({
    queryKey: ['search-articles'],
    queryFn: async () => {
      const response = await axios.get(
        `https://api.nytimes.com/svc/search/v2/articlesearch.json?q=election&api-key=${process.env.NEXT_PUBLIC_NEW_YORK_TIMES_API_KEY}&fq=glocations:("SOUTH KOREA")`
      );

      return response.data;
    },
  });

  console.log(data);

  return <div>스크랩</div>;
}
