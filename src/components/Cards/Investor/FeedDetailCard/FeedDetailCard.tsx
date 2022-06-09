import React from 'react';
import dynamic from 'next/dynamic';
import { FeedDetailCardWrapper } from './FeedDetailCard.Elements';
import FeedDetailOverview from './FeedDetailOverview/FeedDetailOverview';
import PortfolioStrategyWithInstrumentSymbol from './PortfolioStrategyWithInstrumentSymbol/PortfolioStrategyWithInstrumentSymbol';
import ReactionAndInvestment from './ReactionAndInvestment/ReactionAndInvestment';
import ReasonWithScreenshot from './ReasonWithScreenshot/ReasonWithScreenshot';
import StatusWithFeedPerformance from './StatusWithFeedPerformance/StatusWithFeedPerformance';

const ChooseYourBrokerNoSSR = dynamic(
  () => import('./ChooseYourBroker/ChooseYourBroker'),
  {
    ssr: false,
  }
);

const FeedDetailCard = () => {
  return (
    <FeedDetailCardWrapper>
      <StatusWithFeedPerformance />
      <PortfolioStrategyWithInstrumentSymbol />
      <FeedDetailOverview />
      <ReasonWithScreenshot />
      <ChooseYourBrokerNoSSR />
      <ReactionAndInvestment />
    </FeedDetailCardWrapper>
  );
};

export default FeedDetailCard;
