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

  const isHeadlineSelected = headline !== '전체 헤드라인';
  const isDateSelected = date !== '전체 날짜';
  const isCountriesSelected = countries !== '전체 국가';

  return (
    <Container>
      <FilterButton
        icon={
          <Image
            alt="돋보기 아이콘"
            src={isHeadlineSelected ? '/search-colored.svg' : '/search.svg'}
            width={15}
            height={15}
          />
        }
        content={headline}
        onClick={openFilterModal}
        isSelected={isHeadlineSelected}
      />
      <FilterButton
        icon={
          <Image
            alt="달력 아이콘"
            src={isDateSelected ? '/calendar-colored.svg' : '/calendar.svg'}
            width={15}
            height={15}
          />
        }
        content={date}
        onClick={openFilterModal}
        isSelected={isDateSelected}
      />
      <FilterButton
        content={countries}
        onClick={openFilterModal}
        isSelected={isCountriesSelected}
      />
    </Container>
  );
}

export default Header;
