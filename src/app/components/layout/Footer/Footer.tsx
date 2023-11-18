import Image from 'next/image';
import styled from 'styled-components';

interface Props {
  page: 'home' | 'scrap';
  setPage: (page: 'home' | 'scrap') => void;
}

export default function Footer({ page, setPage }: Props) {
  const isHomePage = page === 'home';

  return (
    <Container>
      <PageNavigatorButton onClick={() => setPage('home')} color={isHomePage ? '#fff' : '#6D6D6D'}>
        <Image
          alt="홈 페이지 아이콘"
          src={`/homeIcon-${isHomePage ? 'light' : 'dark'}.svg`}
          width={20}
          height={22}
        />{' '}
        홈
      </PageNavigatorButton>
      <PageNavigatorButton onClick={() => setPage('scrap')} color={isHomePage ? '#6D6D6D' : '#fff'}>
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

const Container = styled.div`
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 85px;
  background-color: #000;
  display: flex;

  border-radius: 30px 30px 0 0;
`;

const PageNavigatorButton = styled.button<{ color?: string }>`
  flex: 1;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 9px;

  background-color: inherit;
  color: ${(props) => props.color || '#fff'};
  font-size: 12px;
  font-weight: 700;
  cursor: pointer;

  border-radius: inherit;
  border: none;
`;
