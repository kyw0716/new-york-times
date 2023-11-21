import ArticleList from '@/components/article/List';
import { useArticleType } from '@/hooks/useArticleType';
import { useArticleQuery } from './hooks/useArticleQuery';
import { Container } from './ArticleFetcher.style';

function ArticleFetcher() {
  const { articleType } = useArticleType();
  const { data, isPending, isError } = useArticleQuery();

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
export default ArticleFetcher;
