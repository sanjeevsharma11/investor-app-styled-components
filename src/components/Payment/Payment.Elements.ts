import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  margin: 1rem auto;
  width: 100%;
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  margin: 1rem 0;
`;

export const Box = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
  padding: 1rem 2rem;
  border-radius: 10px;
`;

export const Error = styled(Box)`
  color: white;
  background: red;
`;

export const Info = styled(Box)`
  color: black;
  background: gray;
`;

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 1rem;
  background: white;
  margin: 3rem 0;
  text-align: justify;
  line-height: 1.5;
  gap: 5rem;

  @media screen and (min-width: 768px) {
    flex-direction: row;
  }
`;

export const Heading = styled.h1`
  font-size: 2.5rem;
  font-weight: bold;
  color: #023047;
`;

export const InfoText = styled.p`
  font-size: 1.5rem;
  margin: 10px 0;
  font-weight: 600;
  text-align: center;
`;

export const UnlockNowButton = styled.button`
  font-size: 14px;
  border: none;
  outline: none;
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #ffffff;
  cursor: pointer;
  margin: 1rem auto;

  span:first-child {
    padding: 1rem 0.5rem;
    background: #3a63bd;
    border-radius: 5px 0 0 5px;
    display: flex;
    align-items: center;
    justify-content: center;

    svg {
      margin-right: -0.1rem;
    }
  }
  span:last-child {
    padding: 1rem;
    background: #5589ff;
    border-radius: 0 5px 5px 0;
  }
`;
