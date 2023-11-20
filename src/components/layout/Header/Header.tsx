import Image from 'next/image';
import { Container } from './Header.style';
import FilterButton from './components/FilterButton';
import { useModal } from '@/hooks/useModal';
import FilterModal from '@/components/modal/filterModal';

function Header() {
  const { openModal } = useModal();

  const openFilterModal = () => {
    openModal(<FilterModal />);
  };

  return (
    <Container>
      <FilterButton
        icon={<Image alt="돋보기 아이콘" src={'/search.svg'} width={15} height={15} />}
        content="전체 헤드라인"
        onClick={openFilterModal}
      />
      <FilterButton
        icon={<Image alt="달력 아이콘" src={'/calendar.svg'} width={15} height={15} />}
        content="전체 날짜"
        onClick={openFilterModal}
      />
      <FilterButton content="전체 국가" onClick={openFilterModal} />
    </Container>
  );
}

export default Header;
