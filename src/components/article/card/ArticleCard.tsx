import styled from 'styled-components';
import { Article } from '../list/ArticleList';
import Image from 'next/image';

interface Props {
  article: Article;
  isSubscribed?: boolean;
}

function ArticleCard({ article, isSubscribed }: Props) {
  const { headline, organization, reporter, web_url, pub_date } = article;
  const date = new Date(pub_date);
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();

  return (
    <Container>
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

const Container = styled.div`
  height: 84px;
  padding: 10px 20px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex-shrink: 0;

  background-color: #fff;
  border-radius: 8px;
`;

const HeadLine = styled.h1`
  font-size: 16px;
  font-weight: 700;
`;

const Head = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 8px;
`;

const Bottom = styled.div`
  display: flex;
  justify-content: space-between;

  font-size: 10px;
`;

const ReporterAndOrganization = styled.div`
  display: flex;
  gap: 8px;
`;

const EllipsisSpan = styled.span`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

const UnStyledButton = styled.button`
  width: fit-content;
  height: fit-content;
  background-color: inherit;
  border: none;
  cursor: pointer;
`;

export default ArticleCard;
