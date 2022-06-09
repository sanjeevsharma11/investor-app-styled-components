import styled, { keyframes, css } from 'styled-components';

export const FeedCardContainer = styled.div`
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;
  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.1);
  transition: all 0.5s ease-in-out;
  background-color: #fff;
  overflow: hidden;
  width: 340px;
  min-height: 363px;
`;

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
  padding: 1rem;
  width: 100%;
`;

export const ExpertInfoWrapper = styled(Row)`
  padding: 0;
  width: auto;
`;

export const ExpertAvatar = styled.img`
  height: 29.41px;
  width: 29.41px;
  border-radius: 50%;
  border: 1px solid #e6e6e6;
  object-fit: cover;
`;

export const ExpertName = styled.div`
  font-size: 12px;
  font-weight: 600;
  color: #0d0c0c;
`;

export const InstrumentInfoWrapper = styled(Row)`
  padding: 0;
  width: auto;
`;

export const InstrumentTransactionType = styled.div(
  ({
    transactionType,
    premiumTradeType,
  }: {
    transactionType: string;
    premiumTradeType: string;
  }) => [
    {
      height: '25px',
      width: '25px',
      borderRadius: '5px',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
    premiumTradeType === 'PAID'
      ? {
          backgroundColor: '#FFE2B7',
          color: '#F29D1D',
        }
      : transactionType === 'BUY'
      ? {
          background: '#CAFFD9',
          color: '#0D9F36',
        }
      : {
          backgroundColor: 'rgba(255, 72, 72, 0.15)',
          color: '#FF4848',
        },
  ]
);

export const InstrumentName = styled.h1`
  font-size: 16px;
  font-weight: 500;
  color: #000000;
`;

export const InstrumentReturn = styled.span(
  ({ instrumentReturn }: { instrumentReturn: number }) => [
    instrumentReturn > 0 ? { color: '#0D9F36' } : { color: '#FF4848' },
    {
      fontSize: '10px',
    },
  ]
);

export const BullishOrBerrish = styled.div`
  font-size: 10px;
  background: ${({ bullish }: { bullish: string }) =>
    bullish === 'bullish' ? '#e5f0ff' : 'hsla(14, 100%, 93%, 1)'};
  color: ${({ bullish }: { bullish: string }) =>
    bullish === 'bullish' ? 'hsla(222, 100%, 67%, 1)' : '#FF4848'};
  font-weight: 400;
  text-transform: capitalize;
  padding: 0.3rem 0.6rem;
  border-radius: 5px;
`;

export const Reason = styled.p`
  font-size: 12px;
  font-weight: 400;
  color: #000000;
  margin-top: 0.5rem;
  line-height: 15px;
  text-align: center;
  width: 100%;
`;

export const FeedStatsWrapper = styled(Row)`
  gap: 1rem;
  justify-content: center;
  flex-wrap: wrap;
  padding: 1rem 0;
`;

export const FeedStatsCard = styled.div`
  background: #e5f0ff;
  padding: 0.5rem 1rem;
  width: 120px;
  height: 60px;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  flex-direction: column;

  &:nth-child(2),
  &:nth-child(4) {
    h3 {
      text-align: right;
    }
    div {
      justify-content: flex-end;
    }
  }
`;

export const FeedStatsTitle = styled.h3`
  font-size: 12px;
  font-weight: 500;
  color: #5589ff;
`;

export const FeedStatsValue = styled.div`
  font-size: 16px;
  font-weight: 500;
  color: #294166;
  line-height: 20px;
  margin-top: 0.5rem;
  display: flex;
  align-items: center;

  img {
    height: 20px;
    width: 20px;
    margin-right: 0.5rem;
    margin-top: -0.5rem;
  }
`;

const POSTIVE_UPSIDE_ANIMATION = keyframes`
  0% {
    transform: translateY(0px);
  }
  100% {
    transform: translateY(-5px);
  }
`;

const NEGATIVE_UPSIDE_ANIMATION = keyframes`
  0% {
    transform: translateY(-5px);
  }
  100% {
    transform: translateY(0px);
  }
`;

export const UpsideArrow = styled.div(
  ({ upsideInPercent }: { upsideInPercent: number }) => [
    {
      fontSize: '12px',
      fontWeight: 500,
      lineHeight: '20px',
      marginTop: '0.5rem',
      display: 'flex',
      alignItems: 'center',
    },
    css`
      animation: ${upsideInPercent > 0
          ? POSTIVE_UPSIDE_ANIMATION
          : NEGATIVE_UPSIDE_ANIMATION}
        1s ease-in-out infinite;
      color: ${upsideInPercent > 0 ? '#0D9F36' : '#FF4848'};
      svg {
        transform: rotate(${upsideInPercent > 0 ? '-90' : '90'}deg);
      }
    `,
  ]
);

export const UpsideInPercentValue = styled.span`
  font-size: 14px;
  font-weight: 500;
  color: ${({ upsideInPercent }: { upsideInPercent: number }) =>
    upsideInPercent > 0 ? '#0D9F36' : '#FF4848'};
`;

export const UpsideInPriceValue = styled.span`
  font-size: 14px;
  font-weight: 500;
  color: #294166;
  margin-left: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    margin-right: -0.4rem;
    margin-top: 0.1rem;
  }
`;

export const ExitDate = styled.span`
  font-size: 14px;
  font-weight: 500;
  color: #294166;
`;

export const ReactionWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ReactionList = styled(ReactionWrapper)`
  gap: 0.5rem;
  margin-right: 2.5rem;
`;

export const ReactionCount = styled.div`
  font-size: 10px;
  font-weight: 500;
  color: #b5b5b5;
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

export const PostedOn = styled.div`
  font-size: 10px;
  font-weight: 500;
  color: #b5b5b5;
`;

export const InvestNowButton = styled.button`
  background: #5589ff;
  border: none;
  outline: none;
  border-radius: 5px;
  padding: 1rem 1.5rem;
  color: #ffffff;
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
