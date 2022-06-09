import styled from 'styled-components';

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  gap: 1rem;
  width: 100%;
  padding: 1rem;

  flex-wrap: wrap;

  @media screen and (min-width: 540px) {
    flex-wrap: nowrap;
  }
`;

export const Title = styled.h3`
  color: hsla(0, 0%, 44%, 1);
  font-size: 16px;
  line-height: 19px;
  font-weight: 500;
  width: 100%;
`;

export const Button = styled.button`
  border-radius: 10px;
  width: 15rem;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

export const ZerodhaButton = styled(Button)`
  background-color:background: hsla(221, 100%, 91%, 1);
  border: 1px solid hsla(221, 100%, 66%, 1);

  &:hover {
    background-color: hsla(221, 100%, 91%, 0.8);
  }
`;

export const AngelOneButton = styled(Button)`
  background-color: hsla(0, 0%, 97%, 1);
  border: 1px solid hsla(0, 0%, 38%, 1);

  &:hover {
    background-color: hsla(0, 0%, 97%, 0);
  }
`;

export const ButtonWrapper = styled(Row)`
  flex-wrap: nowrap;
  padding: 0.5rem 0;
`;
