import styled, { keyframes } from 'styled-components';

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: #fff;
`;

export const StatusWrapper = styled(Row)`
  justify-content: flex-start;
  gap: 0.5rem;
`;

export const StatusDot = styled.span`
  width: 0.5rem;
  height: 0.5rem;
  border-radius: 50%;
  background-color: ${({ status }: { status: string }) => {
    switch (status) {
      case 'live':
        return `hsla(234, 100%, 68%, 1)`;
      case 'waiting':
        return `hsla(46, 100%, 51%, 1)`;
      default:
        return `hsla(0, 0%, 41%, 1)`;
    }
  }};
`;

export const TradeStatus = styled.span`
  font-size: 12px;
  font-weight: 500;
  color: hsla(0, 0%, 0%, 1);
  text-transform: capitalize;
  line-height: 14.52px;
`;

export const TradeStatusType = styled.span`
  font-size: 12px;
  font-weight: 400;
  line-height: 15px;
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;
  text-transform: capitalize;
  ${({ status, alertHit }: { status: string; alertHit: string }) => {
    switch (status) {
      case 'live':
        return `
        background: hsla(222, 100%, 95%, 1);
        color: hsla(222, 74%, 68%, 1);
        `;
      case 'waiting':
        return `
        background: hsla(46, 100%, 51%, 0.1);
        color:  hsla(46, 100%, 51%, 1);
        `;
      case 'expired':
        switch (alertHit) {
          case 'target-hit':
            return `
        background: hsla(129, 100%, 96%, 1);
        color:  hsla(140, 71%, 39%, 1);
        `;
          case 'stopLoss-hit':
            return `
        background: hsla(0, 100%, 95%, 1);
        color: hsla(0, 100%, 65%, 1);
        `;
          default:
            return `
        background: hsla(0, 0%, 41%, 0.1);
        color: hsla(0, 0%, 41%, 1);
        `;
        }

      default:
        return `
          display: none;  
        `;
    }
  }}
`;

export const Dot = styled.span`
  width: 0.4rem;
  height: 0.4rem;
  border-radius: 50%;
  background-color: hsla(0, 0%, 41%, 0.5);
  margin-bottom: 0.2rem;
`;

export const PerformanceWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  gap: 0.5rem;
`;

const pulse = keyframes`
  0% {
    transform: scale(1);
    opacity: 1;
  }
  50% {
    transform: scale(1.1);
    opacity: 0.5;
  }
  100% {
    transform: scale(1);
    opacity: 1;
  }
`;

export const PerformanceIconAndValueWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 0.2rem;
  cursor: pointer;

  svg {
    width: 1.5rem;
    height: 1.5rem;
  }

  &:first-child {
    svg {
      color: hsla(234, 100%, 68%, 1);
      margin-bottom: 0.2rem;
      animation: ${pulse} 2s linear infinite;
    }
  }
`;

export const PerformanceValue = styled.span`
  font-size: 12px;
  font-weight: 400;
  color: hsla(0, 0%, 0%, 1); ;
`;

export const ReactionList = styled(PerformanceIconAndValueWrapper)`
  gap: 0.5rem;
  margin-right: 1.5rem;
`;

const AnimateReaction = keyframes`
  0% {
    transform: translateY(-5px);
  }
  100% {
    transform: translateY(0px);
  }
`;

export const ReactionIcon = styled.div`
  height: 20px;
  width: 20px;
  margin-right: -1.6rem;
  animation: ${AnimateReaction} 2s ease-in-out infinite;
`;

export const PostedOnWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  color: hsla(0, 0%, 44%, 1);
  font-size: 10px;
  line-height: 12.1px;
`;
