import { forwardRef } from 'react';
import ArticleCard from '../Card';
import { Container } from './ArticleList.style';
import { getScrappedArticles } from '@/stores/article/scrappedArticleStore';
import { LoadingContainer, LoadingSpinner } from '../Fetcher/ArticleFetcher.style';

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
  return (
    <Container>
      {articles.map((article) => (
        <ArticleCard
          key={article.id}
          article={article}
          isScrapped={getScrappedArticles()[article.id] !== undefined}
        />
      ))}
      {isFetching ? (
        <LoadingContainer>
          <LoadingSpinner />
        </LoadingContainer>
      ) : (
        <div ref={ref}></div>
      )}
    </Container>
  );
});

ArticleList.displayName = 'ArticleList';

export default ArticleList;
