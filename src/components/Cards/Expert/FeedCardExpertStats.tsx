import React, { useState } from 'react';
import { BiRupee } from 'react-icons/bi';
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

const expertStats = {
  avatar: 'https://i.pravatar.cc/300',
  name: 'Sanjeev Sharma',
  memberSince: new Date().getFullYear() - 1,
  accuracy: 92,
  expertReturn: -25,
  tradeNumber: 23,
  profit: 17939,
};

const FeedCardExpertStats = () => {
  const [showExpertDetails, setShowExpertDetails] = useState(false);

  return (
    <ExpertCard>
      <ExpertCardHeader>
        <HeaderLeft>
          <ExpertAvatar src={expertStats.avatar} />
          <NameAndMemberSince>
            <ExpertName>Sanjeev Sharma</ExpertName>
            <MemberSince>
              Member since{' '}
              {dayjs(expertStats.memberSince).format('MMM DD, YYYY')}
            </MemberSince>
          </NameAndMemberSince>
        </HeaderLeft>
        <HeaderRight showExpertDetails={showExpertDetails}>
          <AccuracyContainer>
            <ExpertAccuracyHeading>Accuracy</ExpertAccuracyHeading>
            <ExpertAccuracyValue gain={expertStats.accuracy}>
              {expertStats.accuracy}
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
          <ExpertDetailsValue gain={expertStats.expertReturn}>
            {expertStats.expertReturn}%
          </ExpertDetailsValue>
        </ExpertDetailColumn>

        <ExpertDetailColumn>
          <ExpertDetailsHeading>Trades</ExpertDetailsHeading>
          <ExpertDetailsValue gain={expertStats.tradeNumber}>
            {expertStats.tradeNumber}
          </ExpertDetailsValue>
        </ExpertDetailColumn>

        <ExpertDetailColumn>
          <ExpertDetailsHeading>Returns</ExpertDetailsHeading>
          <ExpertDetailsValue gain={expertStats.profit}>
            <BiRupee /> {expertStats.profit}
          </ExpertDetailsValue>
        </ExpertDetailColumn>
      </ExpertDetailContainer>
    </ExpertCard>
  );
};

export default FeedCardExpertStats;
