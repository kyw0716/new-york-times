import { FormEventHandler, useState } from 'react';
import {
  Container,
  CountryButton,
  CountryButtonContainer,
  Input,
  InputLabelContainer,
  Label,
  SubmitButton,
} from './FilterModal.style';
import { COUNTRIES } from './contstans';
import { Country } from './types';
import { useFilter } from '@/hooks/useFilter';
import { useModal } from '@/hooks/useModal';

function FilterModal() {
  const { closeModal } = useModal();
  const {
    headline: initialHeadline,
    date: initialDate,
    countries: initialCountries,
    countriesArray,
    setFilters,
  } = useFilter();

  const [headline, setHeadline] = useState(
    initialHeadline === '전체 헤드라인' ? '' : initialHeadline
  );
  const [date, setDate] = useState(
    initialDate === '전체 날짜' ? '' : initialDate.replaceAll('.', '-')
  );
  const [countries, setCountries] = useState<string[]>(
    initialCountries === '전체 국가' ? [] : countriesArray
  );

  const handleSubmit: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();

    setFilters({ headline, date, countries });
    closeModal();
    console.log(headline, date, countries);
  };

  const handleToggleCountry = (country: Country) => {
    if (countries.includes(country)) {
      setCountries((prev) => prev.filter((c) => c !== country));
      return;
    }

    setCountries((prev) => [...prev, country]);
  };

  return (
    <Container onSubmit={handleSubmit}>
      <InputLabelContainer>
        <Label>헤드라인</Label>
        <Input
          value={headline}
          onChange={(e) => setHeadline(e.target.value)}
          placeholder="검색하실 헤드라인을 입력해주세요"
        />
      </InputLabelContainer>
      <InputLabelContainer>
        <Label>날짜</Label>
        <Input value={date} onChange={(e) => setDate(e.target.value)} type="date" />
      </InputLabelContainer>
      <InputLabelContainer>
        <Label>국가</Label>
        <CountryButtonContainer>
          {(Object.keys(COUNTRIES) as Country[]).map((country) => (
            <CountryButton
              type="button"
              key={country}
              onClick={() => handleToggleCountry(country)}
              color={countries.includes(country) ? '#82B0F4' : '#fff'}
            >
              {country}
            </CountryButton>
          ))}
        </CountryButtonContainer>
      </InputLabelContainer>
      <SubmitButton>필터 적용하기</SubmitButton>
    </Container>
  );
}

export default FilterModal;
