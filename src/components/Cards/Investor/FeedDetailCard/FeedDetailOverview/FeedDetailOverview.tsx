import React, { useState } from 'react';
import dayjs from 'dayjs';
import {
  ShowAdvanced,
  ColumnLeft,
  ColumnRight,
  ExitValue,
  Row,
  Title,
  UpsideOrReturn,
  FeedDetailContainer,
  ShowBasic,
  Value,
  ExitPrice,
  QuantiyIcon,
  TargetIcon,
  FlexContainer,
  StopLossIcon,
  TrailingStopLoss,
} from './FeedDetailOverview.Elements';
import {
  IoIosArrowDropdownCircle,
  IoIosArrowDropupCircle,
} from 'react-icons/io';
import { HiTrendingUp } from 'react-icons/hi';
import { FaWeightHanging } from 'react-icons/fa';
import AboveImg from 'assests/images/investor/above.svg';
import BelowImg from 'assests/images/investor/below.svg';
import { IFeedDocument } from 'store/types/feed.types';
import { numberWithCommas } from 'utils/numberWithCommas';
import Image from 'next/image';

const FeedDetailOverview = ({
  upsideInPercent,
  feedReturn,
  feed,
}: {
  upsideInPercent: number;
  feedReturn: number;
  feed: IFeedDocument['feed'];
}) => {
  const [showTipDetails, setShowTipDetails] = useState(true);

  const getTriggerLevelWithValue = ({
    triggerLevel,
    LTP,
    triggerPriceHigh,
    triggerPriceLow,
    status,
  }: {
    triggerLevel: string;
    LTP: number;
    triggerPriceHigh: number;
    triggerPriceLow: number;
    status: string;
  }) => {
    switch (triggerLevel) {
      case 'above': {
        const triggerLevel =
          status === 'waiting' ? 'Waiting for level' : 'Above';
        const triggerValue = triggerPriceHigh;

        return [triggerLevel, triggerValue];
      }
      case 'below': {
        const triggerLevel =
          status === 'waiting' ? 'Waiting for level' : 'Below';
        const triggerValue = triggerPriceLow;

        return [triggerLevel, triggerValue];
      }
      case 'range': {
        const triggerLevel =
          status === 'waiting' ? 'Waiting for level' : 'Range';
        const triggerValue = [triggerPriceLow, triggerPriceHigh];

        return [triggerLevel, triggerValue];
      }
      default: {
        const triggerLevel = 'Market';
        const triggerValue = LTP;

        return [triggerLevel, triggerValue];
      }
    }
  };

  const [triggerLevel, triggerValue] = getTriggerLevelWithValue({
    triggerLevel: feed?.triggerLevel as string,
    LTP: feed?.instrumentId?.LTP as number,
    triggerPriceHigh: feed?.triggerPriceHigh as number,
    triggerPriceLow: feed?.triggerPriceLow as number,
    status: feed?.status as string,
  });

  return (
    <>
      <Row>
        <ColumnLeft>
          {feed.status === 'live' ? (
            <>
              <Title>Upside</Title>
              <UpsideOrReturn gain={upsideInPercent}>
                {upsideInPercent}
              </UpsideOrReturn>
            </>
          ) : (
            <>
              <Title>Return</Title>
              <UpsideOrReturn gain={feedReturn}>{feedReturn}</UpsideOrReturn>
            </>
          )}
        </ColumnLeft>
        <ColumnRight>
          <Title>Exit On</Title>
          <ExitValue>
            {dayjs(feed?.duration).format('MMM D, YYYY h:mm A')}
          </ExitValue>
        </ColumnRight>
      </Row>
      <ShowAdvanced showTipDetails={showTipDetails}>
        Advanced
        <IoIosArrowDropdownCircle
          onClick={() => setShowTipDetails(!showTipDetails)}
        />
      </ShowAdvanced>

      <FeedDetailContainer showTipDetails={showTipDetails}>
        <ColumnLeft>
          <Title>Price at Reco</Title>
          <Value>
            ₹{numberWithCommas(feed?.priceAtRecommendation as number)}
          </Value>
        </ColumnLeft>
        <ColumnRight>
          <Title>Trigger Level</Title>
          <FlexContainer>
            {triggerLevel === 'below' ? (
              <Image src={BelowImg} width='10' height='15' alt='' />
            ) : triggerLevel === 'above' ? (
              <Image src={AboveImg} width='10' height='15' alt='' />
            ) : (
              <></>
            )}
            <Value>
              ₹
              {Array.isArray(triggerValue)
                ? numberWithCommas(triggerValue[0] as number) +
                  ' - ' +
                  numberWithCommas(triggerValue[1] as number)
                : numberWithCommas(triggerValue as number)}
            </Value>
          </FlexContainer>
        </ColumnRight>

        <ColumnLeft>
          <Title>Target </Title>
          {feed?.target?.map(
            (item: number, index: React.Key | null | undefined) => (
              <FlexContainer key={index}>
                {item && item !== Number('-1') ? (
                  <>
                    <TargetIcon>
                      <HiTrendingUp />
                    </TargetIcon>
                    <Value>₹{numberWithCommas(item as number)}</Value>
                  </>
                ) : (
                  <>-</>
                )}
              </FlexContainer>
            )
          )}
        </ColumnLeft>
        <ColumnRight>
          <Title>Stoploss</Title>
          {feed?.stopLoss
            ?.slice(0, 1)
            ?.map((item: number, index: React.Key | null | undefined) => (
              <FlexContainer key={index}>
                {item && item !== Number('-1') ? (
                  <>
                    <StopLossIcon>
                      <HiTrendingUp />
                    </StopLossIcon>
                    <Value>₹{numberWithCommas(item as number)}</Value>
                  </>
                ) : (
                  <>-</>
                )}
              </FlexContainer>
            ))}
          {feed.trailingStopLoss && (
            <TrailingStopLoss>Trailing Stop Loss</TrailingStopLoss>
          )}
        </ColumnRight>

        <ColumnLeft>
          <Title>Quantity</Title>
          <Value>
            <QuantiyIcon>
              <FaWeightHanging />
            </QuantiyIcon>
            {numberWithCommas(feed?.qty as number)}
          </Value>
        </ColumnLeft>
        <ColumnRight>
          <Title>Exit Price</Title>
          <ExitPrice gain={feed.exitTradePrice}>
            {feed?.exitTradePrice
              ? `₹${numberWithCommas(feed?.exitTradePrice as number)}`
              : '-'}
          </ExitPrice>
        </ColumnRight>
      </FeedDetailContainer>

      <ShowBasic showTipDetails={showTipDetails}>
        Basic
        <IoIosArrowDropupCircle
          onClick={() => setShowTipDetails(!showTipDetails)}
        />
      </ShowBasic>
    </>
  );
};

export default FeedDetailOverview;
