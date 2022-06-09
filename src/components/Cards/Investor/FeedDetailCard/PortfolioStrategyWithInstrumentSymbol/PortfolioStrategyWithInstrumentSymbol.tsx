import React from 'react';
import {
  InstrumentInfoWrapper,
  InstrumentName,
  InstrumentReturn,
  InstrumentTransactionType,
  PortfolioStrategyTitle,
  PortfolioStrategyWithInstrumentSymbolHeader,
  PortfolioStrategyWithInstrumentSymbolWrapper,
  Row,
} from './PortfolioStrategyWithInstrumentSymbol.Elements';

const data = {
  portfolio: 'My Default Portfolio',
  strategy: 'My Default Strategy',
  instrumentSymbol: 'BANKNIFTY09JUN2235100CE',
  transactionType: 'BUY',
  instrumentReturn: 0.21,
};

const PortfolioStrategyWithInstrumentSymbol = () => {
  return (
    <PortfolioStrategyWithInstrumentSymbolWrapper>
      <PortfolioStrategyWithInstrumentSymbolHeader>
        {`
            Portfolio > Strategy
          `}
      </PortfolioStrategyWithInstrumentSymbolHeader>
      <PortfolioStrategyTitle>
        {`
            ${data.portfolio} > ${data.strategy}
          `}
      </PortfolioStrategyTitle>

      <Row>
        <InstrumentInfoWrapper>
          <InstrumentTransactionType transactionType={data.transactionType}>
            {data.transactionType === 'BUY' ? 'B' : 'S'}
          </InstrumentTransactionType>
          <InstrumentName>{data.instrumentSymbol}</InstrumentName>
          <InstrumentReturn instrumentReturn={data.instrumentReturn}>
            {data.instrumentReturn}
          </InstrumentReturn>
        </InstrumentInfoWrapper>
      </Row>
    </PortfolioStrategyWithInstrumentSymbolWrapper>
  );
};

export default PortfolioStrategyWithInstrumentSymbol;
