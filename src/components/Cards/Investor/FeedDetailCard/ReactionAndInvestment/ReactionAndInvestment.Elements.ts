import styled from 'styled-components';

export const Row = styled.div`
  background: #fff;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 0.5rem;
  align-items: center;
  gap: 0.5rem;
`;

export const ReactionWrapper = styled(Row)`
  img {
    cursor: pointer;
  }
`;

export const ReactionText = styled.span`
  font-size: 1.5rem;
  font-weight: 600;
  margin-top: 0.5rem;
`;

export const InvestmentText = styled.h3`
  color: hsla(0, 0%, 44%, 1);
  font-size: 16px;
  line-height: 19px;
  font-weight: 500;
`;

export const InvestmentValue = styled.p`
  font-size: 14px;
  line-height: 19px;
  font-weight: 400;
  color: hsla(0, 0%, 0%, 1);
  display: flex;
  align-items: center;
  gap: 0.5rem;

  &:before {
    content: '₹';
    margin-right: -0.4rem;
  }
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  padding: 0.5rem 1rem;
`;

export const InvesmentWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 0;
`;
