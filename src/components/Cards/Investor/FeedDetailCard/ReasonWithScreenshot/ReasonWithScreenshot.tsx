import React from 'react';
import {
  BullishOrBerrish,
  Row,
  Title,
  Value,
  ScreenShotContainer,
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

      <ScreenShotContainer
        screenshot={feed.screenshot}
      >
        <img src={feed.screenshot} alt='screenshot' />
      </ScreenShotContainer>
    </>
  );
};

export default ReasonWithScreenshot;
