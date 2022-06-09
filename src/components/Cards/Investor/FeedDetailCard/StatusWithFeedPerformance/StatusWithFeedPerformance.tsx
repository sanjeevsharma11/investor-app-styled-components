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
  PostedOnWrapper,
} from './StatusWithFeedPerformance.Elements';
import { AiFillEye } from 'react-icons/ai';
import { BsShare } from 'react-icons/bs';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import { IReactions } from 'store/types/reaction.types';

dayjs.extend(relativeTime);

const StatusWithFeedPerformance = ({
  status,
  statusType,
  alertHit,
  views,
  reactions,
  postedOn,
}: {
  status: string;
  statusType: string;
  alertHit: string;
  views: number;
  reactions: IReactions[];
  postedOn: Date | undefined;
}) => {
  return (
    <>
      <Row>
        <StatusWrapper>
          <StatusDot status={status} />
          <TradeStatus>{status}</TradeStatus>
          <TradeStatusType status={status} alertHit={alertHit}>
            {statusType}
          </TradeStatusType>
        </StatusWrapper>

        <PerformanceWrapper>
          <PerformanceIconAndValueWrapper>
            <AiFillEye />
            <PerformanceValue>{views}</PerformanceValue>
          </PerformanceIconAndValueWrapper>{' '}
          <Dot />
          {reactions?.length > 0 && (
            <>
              <PerformanceIconAndValueWrapper>
                <ReactionList>
                  {reactions?.slice(0, 3)?.map((reaction, index) => (
                    <ReactionIcon key={index}>{reaction.reaction}</ReactionIcon>
                  ))}
                </ReactionList>
                <PerformanceValue>{reactions?.length}</PerformanceValue>
              </PerformanceIconAndValueWrapper>{' '}
              <Dot />
            </>
          )}
          <PerformanceIconAndValueWrapper>
            <BsShare />
          </PerformanceIconAndValueWrapper>{' '}
        </PerformanceWrapper>
      </Row>
      <PostedOnWrapper>{dayjs(postedOn).fromNow()}</PostedOnWrapper>
    </>
  );
};

export default StatusWithFeedPerformance;
