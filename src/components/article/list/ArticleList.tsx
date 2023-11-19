import ArticleCard from '../Card';
import { Container } from './ArticleList.style';

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
      {articles.map((article) => (
        <ArticleCard key={article.id} article={article} />
      ))}
    </Container>
  );
}

export default ArticleList;
