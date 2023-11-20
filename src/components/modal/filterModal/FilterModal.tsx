import styled from 'styled-components';

function FilterModal() {
  return (
    <Container>
      <InputLabelContainer>
        <Label>헤드라인</Label>
        <Input placeholder="검색하실 헤드라인을 입력해주세요" />
      </InputLabelContainer>
      <InputLabelContainer>
        <Label>날짜</Label>
        <Input type="date" />
      </InputLabelContainer>
      <InputLabelContainer>
        <Label>국가</Label>
        <CountryButtonContainer>
          {['대한민국', '중국', '일본', '미국', '북한', '러시아', '프랑스', '영국'].map(
            (country) => (
              <CountryButton key={country}>{country}</CountryButton>
            )
          )}
        </CountryButtonContainer>
      </InputLabelContainer>
      <SubmitButton>필터 적용하기</SubmitButton>
    </Container>
  );
}

const Container = styled.form`
  width: 335px;
  height: 480px;
  padding: 20px;

  display: flex;
  flex-direction: column;
  align-items: center;

  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 999;

  background-color: #fff;
  border-radius: 16px;
`;

const Label = styled.label`
  font-size: 16px;
  font-weight: 700;

  line-height: 24px;
`;

const Input = styled.input`
  width: 295px;
  height: 44px;
  padding: 10px 20px;
  margin-top: 8px;

  box-sizing: border-box;

  border: 1px solid #c4c4c4;
  border-radius: 8px;

  color: #c4c4c4;
  font-size: 14px;
`;

const InputLabelContainer = styled.div`
  margin-bottom: 40px;
  flex-shrink: 0;
`;

const SubmitButton = styled.button`
  width: 295px;
  height: 60px;

  background-color: #3478f6;
  color: white;

  border: none;
  border-radius: 16px;

  font-size: 16px;
  font-weight: 700;

  cursor: pointer;
`;

const CountryButtonContainer = styled.div`
  width: 295px;
  height: 76px;
  margin-top: 8px;

  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`;

const CountryButton = styled.button`
  width: fit-content;
  height: 34px;
  padding: 0 12px;

  background-color: inherit;
  color: #6d6d6d;
  font-size: 14px;

  border: 1px solid #f2f2f2;
  border-radius: 30px;

  cursor: pointer;
`;

export default FilterModal;
