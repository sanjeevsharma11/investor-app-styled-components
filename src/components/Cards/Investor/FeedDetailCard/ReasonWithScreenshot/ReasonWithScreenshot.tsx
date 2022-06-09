import React from 'react';
import {
  BullishOrBerrish,
  Row,
  Title,
  Value,
  FlexContainer,
} from './ReasonWithScreenshot.Elements';

const feed = {
  bullishOrBearish: 'bearish',
  reason: 'This is a reason',
  screenshot: 'https://via.placeholder.com/150',
};

const ReasonWithScreenshot = () => {
  return (
    <>
      <Row>
        <Title>Reasoning</Title>
        <BullishOrBerrish bullish={feed.bullishOrBearish}>
          {feed.bullishOrBearish}
        </BullishOrBerrish>
      </Row>
      <Value>{feed.reason}</Value>

      <FlexContainer>
        <img src={feed.screenshot} alt='screenshot' />
      </FlexContainer>
    </>
  );
};

export default ReasonWithScreenshot;
