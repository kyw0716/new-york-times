import ArticleList from '@/components/article/List';
import { Article } from '@/components/article/List/ArticleList';
import { useArticleType } from '@/hooks/useArticleType';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import styled from 'styled-components';

function ArticleFetcher() {
  const { articleType } = useArticleType();

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
        const person = d.byline.person[0];
        const name = person ? `${person.firstname} ${person.lastname}` : '';

        return {
          id: d._id,
          headline: d.headline.main,
          organization: d.source,
          reporter: name,
          web_url: d.web_url,
          pub_date: d.pub_date,
        };
      });
    },
  });

  if (isPending) {
    return <>로딩중...</>;
  }

  if (isError || data === undefined) {
    return <>에러 발생</>;
  }

  return (
    <Container>
      <ArticleList articles={articleType === 'default' ? data : []} />
    </Container>
  );
}

const Container = styled.div`
  width: 100vw;
  height: calc(100vh - 145px);
  margin-top: 60px;

  display: flex;
  flex-direction: column;
`;

export default ArticleFetcher;
