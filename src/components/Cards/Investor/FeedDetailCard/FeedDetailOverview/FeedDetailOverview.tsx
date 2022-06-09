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
import AboveImg from 'assets/images/investor/above.svg';
import BelowImg from 'assets/images/investor/below.svg';

const feed = {
  upsideInPercent: 43,
  feedReturn: -15,
  status: 'expired',
  exitPrice: 3650,
  target: [500, 600, 1200],
  stopLoss: [500, 600, 1200],
  trailingStoploss: true,
};

const FeedDetailOverview = () => {
  const [showTipDetails, setShowTipDetails] = useState(true);

  return (
    <>
      <Row>
        <ColumnLeft>
          {feed.status === 'live' ? (
            <>
              <Title>Upside</Title>
              <UpsideOrReturn gain={feed.upsideInPercent}>
                {feed.upsideInPercent}
              </UpsideOrReturn>
            </>
          ) : (
            <>
              <Title>Return</Title>
              <UpsideOrReturn gain={feed.feedReturn}>
                {feed.feedReturn}
              </UpsideOrReturn>
            </>
          )}
        </ColumnLeft>
        <ColumnRight>
          <Title>Exit On</Title>
          <ExitValue>{dayjs(new Date('2022-04-01')).fromNow()}</ExitValue>
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
          <Value>₹4,360</Value>
        </ColumnLeft>
        <ColumnRight>
          <Title>Trigger Level</Title>
          <Value>₹2,100</Value>
        </ColumnRight>

        <ColumnLeft>
          <Title>Target </Title>
          {feed?.target?.map(
            (item: number, index: React.Key | null | undefined) => (
              <FlexContainer key={index}>
                <TargetIcon>
                  <HiTrendingUp />
                </TargetIcon>
                <Value>₹{item}</Value>
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
                <StopLossIcon>
                  <HiTrendingUp />
                </StopLossIcon>
                <Value>₹{item}</Value>
              </FlexContainer>
            ))}
          {feed.trailingStoploss && (
            <TrailingStopLoss>Trailing Stop Loss</TrailingStopLoss>
          )}
        </ColumnRight>

        <ColumnLeft>
          <Title>Quantity</Title>
          <Value>
            <QuantiyIcon>
              <FaWeightHanging />
            </QuantiyIcon>
            4
          </Value>
        </ColumnLeft>
        <ColumnRight>
          <Title>Exit Price</Title>
          <ExitPrice gain={feed.exitPrice}>{feed.exitPrice}</ExitPrice>
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
