import React, { useState } from 'react';
import {
  AccuracyContainer,
  ExpertAccuracyHeading,
  ExpertAccuracyValue,
  ExpertAvatar,
  ExpertCard,
  ExpertCardHeader,
  ExpertDetailColumn,
  ExpertDetailContainer,
  ExpertDetailsHeading,
  ExpertDetailsValue,
  ExpertName,
  HeaderLeft,
  HeaderRight,
  MemberSince,
  NameAndMemberSince,
} from './FeedCardExpertStats.Elements';
import { IoIosArrowDropleftCircle } from 'react-icons/io';
import dayjs from 'dayjs';
import { IFeedUser } from 'store/types/feed.types';

const FeedCardExpertStats = ({
  user: {
    _id,
    avatar,
    name,
    createdAt,
    expertReturn,
    hitRatio,
    tradeNumber,
    profit,
  },
}: {
  user: IFeedUser;
}) => {
  const [showExpertDetails, setShowExpertDetails] = useState(true);

  return (
    <ExpertCard>
      <ExpertCardHeader>
        <HeaderLeft>
          <ExpertAvatar src={avatar} />
          <NameAndMemberSince>
            <ExpertName>{name}</ExpertName>
            <MemberSince>
              Member since {dayjs(createdAt).format('MMM DD, YYYY')}
            </MemberSince>
          </NameAndMemberSince>
        </HeaderLeft>
        <HeaderRight showExpertDetails={showExpertDetails}>
          <AccuracyContainer>
            <ExpertAccuracyHeading>Accuracy</ExpertAccuracyHeading>
            <ExpertAccuracyValue gain={hitRatio}>
              {hitRatio * 100}
            </ExpertAccuracyValue>
          </AccuracyContainer>
          <IoIosArrowDropleftCircle
            onClick={() => setShowExpertDetails(!showExpertDetails)}
          />
        </HeaderRight>
      </ExpertCardHeader>

      <ExpertDetailContainer showExpertDetails={showExpertDetails}>
        <ExpertDetailColumn>
          <ExpertDetailsHeading>Returns</ExpertDetailsHeading>
          <ExpertDetailsValue gain={expertReturn}>
            {expertReturn}
          </ExpertDetailsValue>
        </ExpertDetailColumn>

        <ExpertDetailColumn>
          <ExpertDetailsHeading>Trades</ExpertDetailsHeading>
          <ExpertDetailsValue gain={tradeNumber}>
            {tradeNumber}
          </ExpertDetailsValue>
        </ExpertDetailColumn>

        <ExpertDetailColumn>
          <ExpertDetailsHeading>Profit</ExpertDetailsHeading>
          <ExpertDetailsValue gain={profit}>
            {isNaN(profit) ? '-' : `₹${profit}`}
          </ExpertDetailsValue>
        </ExpertDetailColumn>
      </ExpertDetailContainer>
    </ExpertCard>
  );
};

export default FeedCardExpertStats;
