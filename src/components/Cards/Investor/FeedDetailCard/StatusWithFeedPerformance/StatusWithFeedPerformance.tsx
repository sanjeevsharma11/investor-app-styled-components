import React from 'react';
import {
  Row,
  StatusWrapper,
  StatusDot,
  TradeStatus,
  TradeStatusType,
  PerformanceWrapper,
  PerformanceValue,
  PerformanceIconAndValueWrapper,
  Dot,
  ReactionList,
  ReactionIcon,
} from './StatusWithFeedPerformance.Elements';
import { AiFillEye } from 'react-icons/ai';
import { BsShare } from 'react-icons/bs';

const data = {
  status: 'expired',
  statusType: 'Target Hit',
  alertHit: 'target-hit',
  views: 1000,
  reactions: [
    {
      reaction: '❤️',
      _id: '6299f3b9c1718e28ab14999b',
    },
    {
      reaction: '🔥',
      _id: '6299f3b9c1718e28ab14999b',
    },
    {
      reaction: '🔥',
      _id: '6299f3b9c1718e28ab149992',
    },
  ],
};

const StatusWithFeedPerformance = () => {
  return (
    <Row>
      <StatusWrapper>
        <StatusDot status={data.status} />
        <TradeStatus>{data.status}</TradeStatus>
        <TradeStatusType status={data.status} alertHit={data.alertHit}>
          {data.statusType}
        </TradeStatusType>
      </StatusWrapper>

      <PerformanceWrapper>
        <PerformanceIconAndValueWrapper>
          <AiFillEye />
          <PerformanceValue>{data.views}</PerformanceValue>
        </PerformanceIconAndValueWrapper>{' '}
        <Dot />
        <PerformanceIconAndValueWrapper>
          <ReactionList>
            {data.reactions.map((reaction) => (
              <ReactionIcon key={reaction._id}>
                {reaction.reaction}
              </ReactionIcon>
            ))}
          </ReactionList>
          <PerformanceValue>{data.reactions?.length}</PerformanceValue>
        </PerformanceIconAndValueWrapper>{' '}
        <Dot />
        <PerformanceIconAndValueWrapper>
          <BsShare />
        </PerformanceIconAndValueWrapper>{' '}
      </PerformanceWrapper>
    </Row>
  );
};

export default StatusWithFeedPerformance;
