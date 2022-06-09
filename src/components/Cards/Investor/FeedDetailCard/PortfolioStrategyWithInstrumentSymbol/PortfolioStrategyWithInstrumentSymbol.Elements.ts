import styled from 'styled-components';

export const PortfolioStrategyWithInstrumentSymbolWrapper = styled.div`
  background-color: hsla(0, 0%, 96%, 1);
  border-radius: 4px;
  padding: 1rem;
  margin: 1.5rem 0;
`;

export const PortfolioStrategyWithInstrumentSymbolHeader = styled.div`
  color: hsla(0, 0%, 44%, 1);
  line-height: 11px;
  font-size: 10px;
  font-weight: 400;
`;

export const PortfolioStrategyTitle = styled.h3`
  color: hsla(0, 0%, 0%, 1);
  font-size: 12px;
  font-weight: 500;
  line-height: 15px;
  margin: 0.5rem 0;
`;

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  gap: 0.5rem;
  width: 100%;
  margin: 0.5rem 0;
`;

export const InstrumentInfoWrapper = styled(Row)`
  padding: 0;
  width: auto;
`;

export const InstrumentTransactionType = styled.div(
  ({ transactionType }: { transactionType: string }) => [
    {
      height: '30px',
      width: '30px',
      borderRadius: '5px',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
    transactionType === 'BUY'
      ? {
          background: 'hsla(209, 100%, 84%, 1)',
          color: 'hsla(222, 100%, 67%, 1)',
        }
      : {
          backgroundColor: 'rgba(255, 72, 72, 0.15)',
          color: '#FF4848',
        },
  ]
);

export const InstrumentName = styled.div`
  font-weight: 500;
  font-size: 14px;
`;

export const InstrumentReturn = styled.span(
  ({ instrumentReturn }: { instrumentReturn: number }) => [
    instrumentReturn > 0
      ? { color: '#0D9F36' }
      : instrumentReturn < 0
      ? { color: '#FF4848' }
      : {
          color: '#000',
        },
    {
      fontSize: '10px',
      marginTop: '0.3rem',
    },
    `
      &:after {
        content: '%';
      }
    `,
  ]
);
