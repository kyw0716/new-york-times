import { forwardRef } from 'react';
import ArticleCard from '../Card';
import { Container } from './ArticleList.style';
import { getScrappedArticles } from '@/stores/article/scrappedArticleStore';
import { LoadingContainer, LoadingSpinner } from '../Fetcher/ArticleFetcher.style';
import { useArticleType } from '@/hooks/useArticleType';

export interface Article {
  id: string;
  headline: string;
  organization: string;
  reporter: string;
  web_url: string;
  pub_date: string;
  countries: string[];
}

interface Props {
  articles: Article[];
  isFetching?: boolean;
}

const ArticleList = forwardRef<HTMLDivElement, Props>(({ articles, isFetching }, ref) => {
  const { articleType } = useArticleType();

  return (
    <Container>
      {articles.map((article) => (
        <ArticleCard
          key={article.id}
          article={article}
          isScrapped={getScrappedArticles()[article.id] !== undefined}
        />
      ))}
      {articleType === 'default' && <Loader isFetching={isFetching} ref={ref} />}
    </Container>
  );
});

const Loader = forwardRef<HTMLDivElement, { isFetching?: boolean }>(({ isFetching }, ref) => {
  return (
    <>
      {isFetching ? (
        <LoadingContainer>
          <LoadingSpinner />
        </LoadingContainer>
      ) : (
        <div ref={ref}></div>
      )}
    </>
  );
});

ArticleList.displayName = 'ArticleList';
Loader.displayName = 'Loader';

export default ArticleList;
