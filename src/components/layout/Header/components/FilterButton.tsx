import { ReactNode } from 'react';
import styled from 'styled-components';

interface Props {
  icon?: ReactNode;
  content: string;
  onClick: () => void;
}

function FilterButton({ icon, content, onClick }: Props) {
  return (
    <Container onClick={onClick}>
      {icon}
      {content}
    </Container>
  );
}

const Container = styled.button`
  max-width: 200px;
  height: 34px;
  padding: 10px 12px;

  display: flex;
  align-items: center;
  gap: 4px;
  flex-wrap: nowrap;
  flex-shrink: 0;

  border: 1px solid #c4c4c4;
  border-radius: 30px;
  box-sizing: border-box;

  font-size: 14px;
  color: #6d6d6d;

  background-color: inherit;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  word-break: break-all;

  cursor: pointer;
`;

export default FilterButton;
