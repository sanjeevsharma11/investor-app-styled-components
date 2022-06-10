import React, { useEffect } from 'react';
import dynamic from 'next/dynamic';
import { FeedDetailCardWrapper } from './FeedDetailCard.Elements';
import FeedDetailOverview from './FeedDetailOverview/FeedDetailOverview';
import PortfolioStrategyWithInstrumentSymbol from './PortfolioStrategyWithInstrumentSymbol/PortfolioStrategyWithInstrumentSymbol';
import ReactionAndInvestment from './ReactionAndInvestment/ReactionAndInvestment';
import ReasonWithScreenshot from './ReasonWithScreenshot/ReasonWithScreenshot';
import StatusWithFeedPerformance from './StatusWithFeedPerformance/StatusWithFeedPerformance';
import { IFeedDocument } from 'store/types/feed.types';
import { useAppDispatch, useAppSelector } from 'store/hooks';
import { createView, getViews } from 'store/services/views.services';
import { getAllReactions } from 'store/services/reaction.services';
import angelOne from 'utils/angelone';
import zerodha from 'utils/zerodha';

const ChooseYourBrokerNoSSR = dynamic(
  () => import('./ChooseYourBroker/ChooseYourBroker'),
  {
    ssr: false,
  }
);

const FeedDetailCard = ({
  feed,
  portfolio,
  strategy,
  feedReturn,
  bullishOrBearish,
  upsideInPercent,
  minInvestment,
  instrumentReturn,
}: {
  feed: IFeedDocument['feed'];
  portfolio: IFeedDocument['portfolio'];
  strategy: IFeedDocument['strategy'];
  feedReturn: IFeedDocument['feedReturn'];
  bullishOrBearish: IFeedDocument['bullishOrBearish'];
  upsideInPercent: IFeedDocument['upsideInPercent'];
  minInvestment: IFeedDocument['minInvestment'];
  instrumentReturn: IFeedDocument['instrumentReturn'];
}) => {
  const dispatch = useAppDispatch();
  const { views } = useAppSelector((state) => state.view);

  useEffect(() => {
    if (feed) {
      dispatch(
        createView({
          refId: feed._id,
          refType: 'Tip',
        })
      );

      dispatch(
        getViews({
          refId: feed._id,
          refType: 'Tip',
        })
      );

      dispatch(
        getAllReactions({
          refId: feed._id,
          refType: 'Tip',
        })
      );
    }
  }, [feed, dispatch, feed?._id]);

  useEffect(() => {
    setTimeout(() => {
      if (feed) {
        angelOne(
          (window as any).SmartApiConnect,
          process.env.NEXT_APP_SMART_API_KEY,
          feed
        );
        zerodha(
          (window as any).KiteConnect,
          process.env.NEXT_APP_ZERODHA_API_KEY,
          feed
        );
      }
    }, 1000);
  }, [feed]);

  const { reactions } = useAppSelector((state) => state.reaction);
  const { isLoading, isError, message } = useAppSelector((state) => state.feed);

  const { status, listOfAlerts, createdAt } = feed;

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>{message}</div>;
  }

  return (
    <FeedDetailCardWrapper>
      <StatusWithFeedPerformance
        status={status}
        statusType={'Entry Open'}
        alertHit={listOfAlerts[0]?.type}
        views={views}
        reactions={reactions}
        postedOn={createdAt}
      />
      <PortfolioStrategyWithInstrumentSymbol
        portfolio={portfolio}
        strategy={strategy}
        transactionType={feed?.transactionType as string}
        instrumentSymbol={feed?.instrumentSymbol as string}
        instrumentReturn={instrumentReturn}
      />
      <FeedDetailOverview
        upsideInPercent={upsideInPercent}
        feed={feed}
        feedReturn={feedReturn}
      />
      <ReasonWithScreenshot
        bullishOrBearish={bullishOrBearish}
        reason={feed?.reasonForRecommendation as string}
        screenshot={feed?.chartLink as string}
      />
      <ChooseYourBrokerNoSSR />
      <ReactionAndInvestment investment={minInvestment} 
      refId={feed?._id}
      />
    </FeedDetailCardWrapper>
  );
};

export default FeedDetailCard;
