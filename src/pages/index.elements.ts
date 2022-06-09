import styled from 'styled-components';
import Link from 'next/link';

export const HomeContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 2rem;
  max-width: 100%;
  min-height: 100vh;
  overflow: hidden;
  padding: 1rem 2rem;
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
  background: gray;
  color: white;
  margin-top: 1rem;
  border-radius: 0;
`;

export const TermsAndConditions = styled.div`
  color: white;
  font-size: 1.5rem;
  font-weight: bold;
  padding: 1rem 2rem;
  border-radius: 10px;
  margin-top: 1rem;
  text-align: center;
  text-decoration: underline;
`;

export const TermsAndConditionsLink = styled.a`
  color: white;
  margin: 0.5rem;

  &:hover {
    color: blue;
  }
`;

export const LoadButton = styled.button`
  background: #5589ff;
  border: none;
  outline: none;
  border-radius: 5px;
  padding: 1rem 1.5rem;
  color: #ffffff;
`;
