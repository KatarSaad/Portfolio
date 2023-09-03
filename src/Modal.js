import styled from 'styled-components';

const ModalBackdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  backdrop-filter: blur(5px);
  display: ${(props) => (props.show ? 'block' : 'none')};
  z-index: 2;
  embed {
    width: 100%;  /* takes full width of its container */
    height: 80vh; /* sets the height to 80% of viewport height */
    display: block;  /* to ensure it centers properly */
    margin: 0 auto;  /* centers the embed in case its width is less than container's width */
  }


`;

const ModalContent = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  width: 80%;  /* set it to 80% of viewport width */
  max-width: 1400px;  /* but don't let it exceed 1400px */
 
  transform: translate(-50%, -50%);
  background: #111; /* Adjust as needed */
  border-radius: 8px;
  padding: 20px;
  box-shadow: 0 0 15px 5px #fff9; /* This gives the glowing effect */
`;

 const Modal = ({ show, onClose, children }) => {
  return (
    <ModalBackdrop show={show} onClick={onClose}>
      <ModalContent onClick={(e) => e.stopPropagation()}>
        {children}
      </ModalContent>
    </ModalBackdrop>
  );
};

export default Modal;
