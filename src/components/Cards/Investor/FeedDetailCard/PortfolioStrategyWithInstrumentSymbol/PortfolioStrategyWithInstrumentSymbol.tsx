import React from 'react';
import { IFeedDocument } from 'store/types/feed.types';
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

const PortfolioStrategyWithInstrumentSymbol = ({
  portfolio,
  strategy,
  transactionType,
  instrumentSymbol,
  instrumentReturn,
}: {
  portfolio: IFeedDocument['portfolio'];
  strategy: IFeedDocument['strategy'];
  transactionType: string;
  instrumentSymbol: string;
  instrumentReturn: number;
}) => {
  return (
    <PortfolioStrategyWithInstrumentSymbolWrapper>
      <PortfolioStrategyWithInstrumentSymbolHeader>
        {`
            Portfolio > Strategy
          `}
      </PortfolioStrategyWithInstrumentSymbolHeader>
      <PortfolioStrategyTitle>
        {`
           ${portfolio?.name} > ${strategy?.name}
          `}
      </PortfolioStrategyTitle>

      <Row>
        <InstrumentInfoWrapper>
          <InstrumentTransactionType transactionType={transactionType}>
            {transactionType === 'BUY' ? 'B' : 'S'}
          </InstrumentTransactionType>
          <InstrumentName>{instrumentSymbol}</InstrumentName>
          <InstrumentReturn instrumentReturn={instrumentReturn}>
            {instrumentReturn}
          </InstrumentReturn>
        </InstrumentInfoWrapper>
      </Row>
    </PortfolioStrategyWithInstrumentSymbolWrapper>
  );
};

export default PortfolioStrategyWithInstrumentSymbol;
