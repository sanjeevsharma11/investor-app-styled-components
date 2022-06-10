import styled from 'styled-components';

export const AuthCardContainer = styled.section`
  padding: 0.5rem 1rem;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const Logo = styled.img`
  width: 100%;
  height: 5rem;
  margin-bottom: 1rem;
`;

export const RelativeContainer = styled(AuthCardContainer)`
  position: relative;
`;

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 1rem;
  width: 100%;
  padding: 1rem;
`;

export const Overlay = styled.div`
  position: absolute;
  inset: 0;
  z-index: 11;
  background-color: rgba(0, 0, 0, 0);
  width: 100%;
  height: 100%;
  cursor: pointer;
`;
