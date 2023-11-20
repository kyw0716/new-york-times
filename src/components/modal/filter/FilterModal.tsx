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

function FilterModal() {
  const [headline, setHeadline] = useState('');
  const [date, setDate] = useState('');
  const [countries, setCountries] = useState<string[]>([]);

  const handleSubmit: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();

    console.log(headline, date, countries);
  };

  const handleToggleCountry = (country: Country) => {
    if (countries.includes(COUNTRIES[country])) {
      setCountries((prev) => prev.filter((c) => c !== COUNTRIES[country]));
      return;
    }

    setCountries((prev) => [...prev, COUNTRIES[country]]);
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
              color={countries.includes(COUNTRIES[country]) ? '#82B0F4' : '#fff'}
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
