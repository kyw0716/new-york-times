import styled from 'styled-components';

export interface Article {
  id: string;
  headline: string;
  organization: string;
  reporter: string;
  web_url: string;
  pub_date: string;
}

interface Props {
  articles: Article[];
}

function ArticleList({ articles }: Props) {
  return (
    <Container>
      {articles.map((article) => {
        const { headline, id, organization, reporter, web_url, pub_date } = article;
        return (
          <div key={id}>
            <div>헤드라인: {headline}</div>
            <div>조직: {organization}</div>
            <div>기자: {reporter}</div>
            <div>웹 주소: {web_url}</div>
            <div>날짜: {pub_date}</div>
          </div>
        );
      })}
    </Container>
  );
}

const Container = styled.div`
  width: 100vw;
  height: 100%;

  display: flex;
  flex-direction: column;
  gap: 8px;
  align-items: center;
`;

export default ArticleList;
