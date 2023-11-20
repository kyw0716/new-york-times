import styled from 'styled-components';

function FilterModal() {
  return <Container></Container>;
}

const Container = styled.div`
  width: 335px;
  height: 480px;

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

export default FilterModal;
