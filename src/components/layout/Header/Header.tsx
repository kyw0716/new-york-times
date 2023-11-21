import Image from 'next/image';
import { Container } from './Header.style';
import FilterButton from './components/FilterButton';
import { useModal } from '@/hooks/useModal';
import FilterModal from '@/components/modal/filter';
import { useFilter } from '@/hooks/useFilter';

function Header() {
  const { headline, date, countries } = useFilter();

  const { openModal } = useModal();

  const openFilterModal = () => {
    openModal(<FilterModal />);
  };

  return (
    <Container>
      <FilterButton
        icon={<Image alt="돋보기 아이콘" src={'/search.svg'} width={15} height={15} />}
        content={headline}
        onClick={openFilterModal}
      />
      <FilterButton
        icon={<Image alt="달력 아이콘" src={'/calendar.svg'} width={15} height={15} />}
        content={date}
        onClick={openFilterModal}
      />
      <FilterButton content={countries} onClick={openFilterModal} />
    </Container>
  );
}

export default Header;
