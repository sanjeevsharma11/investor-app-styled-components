import React from 'react';
import ChooseYourBroker from './ChooseYourBroker/ChooseYourBroker';
import { FeedDetailCardWrapper } from './FeedDetailCard.Elements';
import FeedDetailOverview from './FeedDetailOverview/FeedDetailOverview';
import PortfolioStrategyWithInstrumentSymbol from './PortfolioStrategyWithInstrumentSymbol/PortfolioStrategyWithInstrumentSymbol';
import ReasonWithScreenshot from './ReasonWithScreenshot/ReasonWithScreenshot';
import StatusWithFeedPerformance from './StatusWithFeedPerformance/StatusWithFeedPerformance';

const FeedDetailCard = () => {
  return (
    <FeedDetailCardWrapper>
      <StatusWithFeedPerformance />
      <PortfolioStrategyWithInstrumentSymbol />
      <FeedDetailOverview />
      <ReasonWithScreenshot />
      <ChooseYourBroker />
    </FeedDetailCardWrapper>
  );
};

export default FeedDetailCard;
