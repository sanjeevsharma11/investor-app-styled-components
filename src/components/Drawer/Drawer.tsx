import React from 'react';
import { CloseIcon, Container, RelativeContainer } from './Drawer.Elements';

const Drawer = ({
  open,
  onClose,
  children,
  ...props
}: {
  open: boolean;
  onClose: (open: boolean) => void;
  children: React.ReactNode;
}) => {
  return (
    <Container open={open}>
      <RelativeContainer>
        <CloseIcon onClick={() => onClose(false)}>X</CloseIcon>
        {children}
      </RelativeContainer>
    </Container>
  );
};

export default Drawer;
