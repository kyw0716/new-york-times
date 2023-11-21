import { ReactNode } from 'react';
import { Container } from './FilterButton.style';

interface Props {
  icon?: ReactNode;
  isSelected?: boolean;
  content: string;
  onClick: () => void;
}

function FilterButton({ icon, content, onClick, isSelected }: Props) {
  return (
    <Container onClick={onClick} color={isSelected === true ? 'selected' : 'unSelected'}>
      {icon}
      {content}
    </Container>
  );
}

export default FilterButton;
