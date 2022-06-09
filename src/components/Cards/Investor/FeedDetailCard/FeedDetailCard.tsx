import React from 'react';
import { FeedDetailCardWrapper } from './FeedDetailCard.Elements';
import StatusWithFeedPerformance from './StatusWithFeedPerformance/StatusWithFeedPerformance';

const FeedDetailCard = () => {
  return (
    <FeedDetailCardWrapper>
      <StatusWithFeedPerformance />
    </FeedDetailCardWrapper>
  );
};

export default FeedDetailCard;
