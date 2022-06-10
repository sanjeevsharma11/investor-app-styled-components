import styled from 'styled-components';

export const Container = styled.div(
  ({ open, style }: { open: boolean; style?: string }) => [
    `
      position: fixed;
      display: ${open ? 'block' : 'none'};
    `,
    style,
  ]
);

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
