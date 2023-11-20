import styled from 'styled-components';

export const Container = styled.form`
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

export const Label = styled.label`
  font-size: 16px;
  font-weight: 700;

  line-height: 24px;
`;

export const Input = styled.input`
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

export const InputLabelContainer = styled.div`
  margin-bottom: 40px;
  flex-shrink: 0;
`;

export const SubmitButton = styled.button`
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

export const CountryButtonContainer = styled.div`
  width: 295px;
  height: 76px;
  margin-top: 8px;

  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`;

export const CountryButton = styled.button`
  width: fit-content;
  height: 34px;
  padding: 0 12px;

  background-color: ${(props) => props.color};
  color: ${(props) => (props.color === '#fff' ? '#6d6d6d' : '#fff')};
  font-size: 14px;

  border: 1px solid #f2f2f2;
  border-radius: 30px;

  cursor: pointer;
`;
