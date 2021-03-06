import styled from 'styled-components';

export const Container = styled.div`
  position: fixed;
  display: ${({ open }: { open: boolean }) => (open ? 'block' : 'none')};
  padding: 3rem 1rem;
  bottom: 0;
  height: auto;
  background: white;
  z-index: 10;
  width: 100%;

  @media screen and (min-width: 920px) {
    width: 80%;
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
