import { useModal } from '@/hooks/useModal';
import styled from 'styled-components';

function Modal() {
  const { modal, closeModal } = useModal();
  const isOpen = modal !== null;

  return (
    <>
      {isOpen && modal}
      {isOpen && <Overlay onClick={() => closeModal()} />}
    </>
  );
}

const Overlay = styled.div`
  width: 100vw;
  height: 100vh;

  position: fixed;
  top: 0;
  left: 0;

  background-color: #00000081;
`;

export default Modal;
