import { Article } from '../List/ArticleList';
import Image from 'next/image';
import {
  Head,
  Bottom,
  Container,
  EllipsisSpan,
  HeadLine,
  ReporterAndOrganization,
  UnStyledButton,
} from './ArticleCard.style';
import { useRouter } from 'next/navigation';
import { useDate } from '@/hooks/useDate';
import { MouseEventHandler } from 'react';
import { setScrappedArticles } from '@/stores/article/scrappedArticleStore';

interface Props {
  article: Article;
  isScrapped?: boolean;
}

function ArticleCard({ article, isScrapped: isSubscribed }: Props) {
  const router = useRouter();
  const { headline, organization, reporter, web_url, pub_date } = article;
  const { year, month, day } = useDate(pub_date);

  const handleClickScrapButton: MouseEventHandler<HTMLButtonElement> = (e) => {
    e.stopPropagation();

    if (!isSubscribed) {
      setScrappedArticles(article, 'add');
    } else {
      setScrappedArticles(article, 'delete');
    }
  };

  return (
    <Container onClick={() => router.push(web_url)}>
      <Head>
        <HeadLine>{headline}</HeadLine>
        <UnStyledButton onClick={handleClickScrapButton}>
          <Image
            alt={isSubscribed ? '노란색이 채워진 별 아이콘' : '빈 별 아이콘'}
            src={isSubscribed ? '/star-fill.svg' : '/star-empty.svg'}
            width={18}
            height={18}
            priority={true}
          />
        </UnStyledButton>
      </Head>
      <Bottom>
        <ReporterAndOrganization>
          {organization !== null && <EllipsisSpan>{organization}</EllipsisSpan>}|
          <EllipsisSpan>{reporter}</EllipsisSpan>
        </ReporterAndOrganization>
        <span>
          {year}.{month}.{day}
        </span>
      </Bottom>
    </Container>
  );
}

export default ArticleCard;
