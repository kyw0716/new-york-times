import ArticleList from '@/components/article/List';
import { useArticleType } from '@/hooks/useArticleType';
import { useArticleQuery } from './hooks/useArticleQuery';
import { Container } from './ArticleFetcher.style';
import { useScrappedArticle } from '@/hooks/useScrappedArticle';

function ArticleFetcher() {
  const { articleType } = useArticleType();
  const { data, isPending, isError } = useArticleQuery();
  const { scrappedArticle } = useScrappedArticle();

  if (isPending) {
    return <>로딩중...</>;
  }

  if (isError || data === undefined) {
    return <>에러 발생</>;
  }

  return (
    <Container>
      <ArticleList articles={articleType === 'default' ? data : Object.values(scrappedArticle)} />
    </Container>
  );
}
export default ArticleFetcher;
