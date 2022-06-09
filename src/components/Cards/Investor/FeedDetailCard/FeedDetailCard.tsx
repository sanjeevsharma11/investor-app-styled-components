import React from 'react';
import { FeedDetailCardWrapper } from './FeedDetailCard.Elements';
import PortfolioStrategyWithInstrumentSymbol from './PortfolioStrategyWithInstrumentSymbol/PortfolioStrategyWithInstrumentSymbol';
import StatusWithFeedPerformance from './StatusWithFeedPerformance/StatusWithFeedPerformance';

const FeedDetailCard = () => {
  return (
    <FeedDetailCardWrapper>
      <StatusWithFeedPerformance />
      <PortfolioStrategyWithInstrumentSymbol />
    </FeedDetailCardWrapper>
  );
};

export default FeedDetailCard;
