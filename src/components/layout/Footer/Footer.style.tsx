import styled from 'styled-components';

export const Container = styled.div`
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 85px;
  background-color: #000;
  display: flex;

  border-radius: 30px 30px 0 0;
`;

export const PageNavigatorButton = styled.button<{ color?: string }>`
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
