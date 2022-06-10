import styled from 'styled-components';

export const Container = styled.div`
  display: ${({ open }: { open: boolean }) => (open ? 'block' : 'none')};
  position: fixed;
  top: 5%;
  left: 0;
  padding: 3rem 2rem;
  width: 100%;
  height: 100%;
  overflow: scroll;
  background: white;
  z-index: 10;
  border-radius: 0.5rem;
  border: 2px solid #e6e6e6;

  @media screen and (min-width: 920px) {
    width: 80%;
    left: 10%;
  }
`;

export const RelativeContainer = styled.div`
  position: relative;
  height: 100%;
  width: 100%;
`;

export const CloseIcon = styled.div`
  position: absolute;
  top: -1.2rem;
  right: 0.5rem;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  font-size: 20px;
  &:hover {
    transform: scale(1.2);
  }
`;
