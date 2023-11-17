'use client';

import { QueryClient, QueryClientProvider, useQuery } from '@tanstack/react-query';
import axios from 'axios';

const queryClient = new QueryClient();

export default function Home() {
  return (
    <QueryClientProvider client={queryClient}>
      <main>
        <Test />
      </main>
    </QueryClientProvider>
  );
}

function Test() {
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

  return <div>하이</div>;
}
