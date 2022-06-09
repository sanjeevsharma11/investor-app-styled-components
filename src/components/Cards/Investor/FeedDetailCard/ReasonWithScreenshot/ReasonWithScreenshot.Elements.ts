import styled from 'styled-components';

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  gap: 1rem;
  width: 100%;
  padding: 1rem;
`;

export const BullishOrBerrish = styled.div`
  font-size: 12px;
  background: ${({ bullish }: { bullish: string }) =>
    bullish.toLowerCase() === 'bullish' ? '#e5f0ff' : 'hsla(14, 100%, 93%, 1)'};
  color: ${({ bullish }: { bullish: string }) =>
    bullish.toLowerCase() === 'bullish'
      ? 'hsla(222, 100%, 67%, 1)'
      : '#FF4848'};
  font-weight: 400;
  text-transform: capitalize;
  padding: 0.3rem 0.6rem;
  border-radius: 5px;
`;

export const Title = styled.h3`
  color: hsla(0, 0%, 44%, 1);
  font-size: 14px;
  line-height: 19px;
  font-weight: 500;
  margin: 0.3rem 0;
`;

export const Value = styled.p`
  font-size: 15px;
  line-height: 19px;
  font-weight: 400;
  color: hsla(0, 0%, 0%, 1);
  padding: 0.5rem 1rem;
`;

export const ScreenShotContainer = styled.div`
  display: ${({ screenshot }: { screenshot: string | null }) =>
    screenshot ? 'flex' : 'none'};
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  width: 100%;
  padding: 1rem;
  width: 100%;
  height: 50vh;

  img {
    width: 100%;
    height: 100%;
  }
`;
