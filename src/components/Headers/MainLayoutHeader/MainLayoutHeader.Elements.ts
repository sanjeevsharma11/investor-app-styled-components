import styled from 'styled-components';

export const Header = styled.header`
  background: hsla(200, 95%, 14%, 1);
  grid-column: 1 / -1;
  height: 6rem;
  padding: 4rem;

  @media (min-width: 920px) {
    height: 8rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1rem 2rem;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
  }
`;

export const Logo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  img {
    width: 100%;
    height: 100%;
  }
`;
