interface Props {
  setPage: (page: 'home' | 'scrap') => void;
}

export default function Footer({ setPage }: Props) {
  return (
    <div>
      <button onClick={() => setPage('home')}>홈</button>
      <button onClick={() => setPage('scrap')}>스크랩</button>
    </div>
  );
}
