import React from 'react';
import { FeedDetailCardWrapper } from './FeedDetailCard.Elements';
import FeedDetailOverview from './FeedDetailOverview/FeedDetailOverview';
import PortfolioStrategyWithInstrumentSymbol from './PortfolioStrategyWithInstrumentSymbol/PortfolioStrategyWithInstrumentSymbol';
import StatusWithFeedPerformance from './StatusWithFeedPerformance/StatusWithFeedPerformance';

const FeedDetailCard = () => {
  return (
    <FeedDetailCardWrapper>
      <StatusWithFeedPerformance />
      <PortfolioStrategyWithInstrumentSymbol />
      <FeedDetailOverview />
    </FeedDetailCardWrapper>
  );
};

export default FeedDetailCard;
