import styled from 'styled-components';
import { Article } from '../list/ArticleList';

interface Props {
  article: Article;
}

function ArticleCard({ article }: Props) {
  const { headline, organization, reporter, web_url, pub_date } = article;
  const date = new Date(pub_date);
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();

  return (
    <Container>
      <Head>
        <HeadLine>{headline}</HeadLine>
        <button>별</button>
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
  height: 104px;
  padding: 10px 20px;

  display: flex;
  flex-direction: column;
  align-items: space-between;
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

export default ArticleCard;
