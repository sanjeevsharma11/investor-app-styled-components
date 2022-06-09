import React from 'react';
import {
  BullishOrBerrish,
  Row,
  Title,
  Value,
  ScreenShotContainer,
} from './ReasonWithScreenshot.Elements';

const ReasonWithScreenshot = ({
  reason,
  screenshot,
  bullishOrBearish,
}: {
  reason: string;
  screenshot: string;
  bullishOrBearish: string;
}) => {
  return (
    <>
      <Row>
        <Title>Reasoning</Title>
        <BullishOrBerrish bullish={bullishOrBearish}>
          {bullishOrBearish}
        </BullishOrBerrish>
      </Row>
      <Value>{reason}</Value>

      <ScreenShotContainer screenshot={screenshot}>
        <img src={screenshot} alt='screenshot' />
      </ScreenShotContainer>
    </>
  );
};

export default ReasonWithScreenshot;
