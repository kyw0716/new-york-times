import { useEffect, useRef } from 'react';
import ArticleList from '@/components/article/List';
import { useArticleType } from '@/hooks/useArticleType';
import { useArticleQuery } from './hooks/useArticleQuery';
import { Container } from './ArticleFetcher.style';
import { useScrappedArticle } from '@/hooks/useScrappedArticle';

function ArticleFetcher() {
  const { articleType } = useArticleType();
  const { data, isPending, isError, fetchNextPage, isFetching, hasNextPage } = useArticleQuery();
  const { scrappedArticleList } = useScrappedArticle();
  const observerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && hasNextPage && !isFetching) {
        fetchNextPage();
      }
    });

    if (observerRef.current) {
      observer.observe(observerRef.current);
    }

    return () => {
      if (observerRef.current) {
        observer.unobserve(observerRef.current);
      }
    };
  }, [fetchNextPage, hasNextPage, isFetching]);

  if (isPending) {
    return <>로딩중...</>;
  }

  if (isError || data === undefined) {
    return <>에러 발생</>;
  }

  return (
    <Container>
      <ArticleList
        articles={
          articleType === 'default'
            ? data.pages.reduce((acc, curr) => [...acc, ...curr], [])
            : scrappedArticleList
        }
        isFetching={isFetching}
        ref={observerRef}
      />
      {!hasNextPage && <div>더이상 불러올 데이터가 없습니다.</div>}
    </Container>
  );
}

export default ArticleFetcher;
