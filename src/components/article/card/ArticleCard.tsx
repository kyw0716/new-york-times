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

interface Props {
  article: Article;
  isSubscribed?: boolean;
}

function ArticleCard({ article, isSubscribed }: Props) {
  const router = useRouter();
  const { headline, organization, reporter, web_url, pub_date } = article;
  const { year, month, day } = useDate(pub_date);

  return (
    <Container onClick={() => router.push(web_url)}>
      <Head>
        <HeadLine>{headline}</HeadLine>
        <UnStyledButton>
          {isSubscribed ? (
            <Image alt="노란색이 채워진 별 아이콘" src={'/star-fill.svg'} width={15} height={15} />
          ) : (
            <Image alt="빈 별 아이콘" src={'/star-empty.svg'} width={15} height={15} />
          )}
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
