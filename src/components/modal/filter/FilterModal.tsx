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

const COUNTRIES = {
  대한민국: 'SOUTH KOREA',
  중국: 'CHINA',
  일본: 'JAPAN',
  미국: 'USA',
  북한: 'NORTH KOREA',
  러시아: 'RUSSIA',
  프랑스: 'FRANCE',
  영국: 'ENGLAND',
};

type Country = keyof typeof COUNTRIES;

function FilterModal() {
  const [headline, setHeadline] = useState('');
  const [date, setDate] = useState('');
  const [countries, setCountries] = useState<string[]>([]);

  const handleSubmit: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();

    console.log(headline, date, countries);
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
              onClick={() => {
                if (countries.includes(COUNTRIES[country])) {
                  setCountries((prev) => prev.filter((c) => c !== COUNTRIES[country]));
                } else {
                  setCountries((prev) => [...prev, COUNTRIES[country]]);
                }
              }}
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
