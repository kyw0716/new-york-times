import Image from 'next/image';
import { Container, PageNavigatorButton } from './Footer.style';

interface Props {
  articleType: 'default' | 'scrap';
  setArticleType: (articleType: 'default' | 'scrap') => void;
}

export default function Footer({ articleType, setArticleType }: Props) {
  const isHomePage = articleType === 'default';

  return (
    <Container>
      <PageNavigatorButton
        onClick={() => setArticleType('default')}
        color={isHomePage ? '#fff' : '#6D6D6D'}
      >
        <Image
          alt="홈 페이지 아이콘"
          src={`/homeIcon-${isHomePage ? 'light' : 'dark'}.svg`}
          width={20}
          height={22}
        />
        홈
      </PageNavigatorButton>
      <PageNavigatorButton
        onClick={() => setArticleType('scrap')}
        color={isHomePage ? '#6D6D6D' : '#fff'}
      >
        <Image
          alt="스크랩 페이지 아이콘"
          src={`/scrapIcon-${isHomePage ? 'dark' : 'light'}.svg`}
          width={24}
          height={24}
        />
        스크랩
      </PageNavigatorButton>
    </Container>
  );
}
