import styled from 'styled-components';

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
  width: 100%;
  padding: 1rem;
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ColumnLeft = styled(Column)`
  align-items: flex-start;
`;

export const ColumnRight = styled(Column)`
  align-items: flex-end;
`;

export const Title = styled.h3`
  color: hsla(0, 0%, 44%, 1);
  font-size: 16px;
  line-height: 19px;
  font-weight: 500;
  margin: 0.3rem 0;
`;

export const Value = styled.div`
  font-size: 14px;
  line-height: 19px;
  font-weight: 400;
  color: hsla(0, 0%, 0%, 1);
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

export const UpsideOrReturn = styled(Value)`
  color: ${({ gain }: { gain: number }) =>
    gain > 0
      ? 'hsla(138, 87%, 40%, 1)'
      : gain < 0
      ? 'hsla(0, 100%, 64%, 1)'
      : 'hsla(200, 95%, 14%, 1)'};

  &:after {
    content: '%';
    margin-left: -0.5rem;
  }
`;

export const Subtitle = styled.h4`
  color: hsla(0, 0%, 44%, 1);
  font-size: 14px;
  line-height: 16px;
  font-weight: 500;
`;

export const ExitValue = styled(Value)`
  font-size: 14px;
`;

export const ShowAdvanced = styled.div`
  background: hsla(0, 0%, 0%, 0);
  border: none;
  color: hsla(0, 0%, 44%, 1);
  font-size: 14px;
  line-height: 16px;
  font-weight: 500;
  display: ${({ showTipDetails }: { showTipDetails: boolean }) =>
    showTipDetails ? 'none' : 'flex'};
  align-items: center;
  justify-content: flex-end;
  width: 100%;
  padding: 0.5rem;

  svg {
    cursor: pointer;
    width: 20px;
  }
`;

export const FeedDetailContainer = styled.div(
  ({ showTipDetails }: { showTipDetails: boolean }) => [
    `
        background: #fff;
        display: grid;        
        grid-template-columns: repeat(2, 1fr);
        grid-gap: 10px;
        transition: all 0.5s ease-in-out;
        max-height: 0;
        transform: translateY(0);
        overflow: hidden;
        padding: 0 1rem;

      `,
    showTipDetails &&
      `
        max-height: 100%;
        overflow: hidden;
        transition: all 0.5s ease-in-out;
        padding: 0 1rem;
        margin-bottom: 1rem;
    `,
  ]
);

export const ShowBasic = styled.div`
  background: hsla(0, 0%, 0%, 0);
  border: none;
  color: hsla(0, 0%, 44%, 1);
  font-size: 14px;
  line-height: 16px;
  font-weight: 500;
  display: ${({ showTipDetails }: { showTipDetails: boolean }) =>
    showTipDetails ? 'flex' : 'none'};
  align-items: center;
  justify-content: flex-end;
  width: 100%;
  padding: 0.5rem;

  svg {
    cursor: pointer;
    width: 20px;
  }
`;

export const ExitPrice = styled(UpsideOrReturn)`
  font-size: 14px;
  line-height: 19px;
  font-weight: 400;

  &:after {
    content: '';
  }
`;

export const QuantiyIcon = styled.div`
  color: hsla(234, 100%, 68%, 1);
  margin-top: 0.3rem;
`;

export const FlexContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
`;

export const TargetIcon = styled.div`
  background: hsla(138, 87%, 40%, 1);
  color: hsla(0, 0%, 100%, 1);
  padding: 0.25rem 0.5rem;
  border-radius: 0.5rem;
  margin: 0.2rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const StopLossIcon = styled.div`
  background: hsla(0, 100%, 64%, 1);
  color: hsla(0, 0%, 100%, 1);
  padding: 0.25rem 0.5rem;
  border-radius: 0.5rem;
  margin: 0.2rem;
  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    transform: rotate(90deg);
  }
`;

export const TrailingStopLoss = styled.div`
  margin: 0.2rem 0;
  font-size: 10px;
  color: hsla(0, 100%, 64%, 1);
`;
