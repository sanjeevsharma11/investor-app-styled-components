import React from 'react';
import ReactionIcon from 'assests/images/investor/reaction.svg';
import MinInvestmentImg from 'assests/images/investor/min_investment.svg';
import {
  Row,
  ReactionWrapper,
  ReactionText,
  InvesmentWrapper,
  InvestmentText,
  InvestmentValue,
  Column,
} from './ReactionAndInvestment.Elements';
import Image from 'next/image';
import { numberWithCommas } from 'utils/numberWithCommas';

const ReactionAndInvestment = ({ investment }: { investment: number }) => {
  return (
    <Row>
      <Row>
        <ReactionWrapper>
          <Image
            src={ReactionIcon}
            alt='Reaction Icon'
            width='20'
            height='20'
          />{' '}
          <ReactionText>Like</ReactionText>
        </ReactionWrapper>
      </Row>

      <Column>
        <InvestmentText>Investment</InvestmentText>
        <InvesmentWrapper>
          <Image
            src={MinInvestmentImg}
            alt='Min Investment Icon'
            width={'20'}
            height={'20'}
            style={{ marginBottom: '2px' }}
          />
          <InvestmentValue>{numberWithCommas(investment)}</InvestmentValue>
        </InvesmentWrapper>
      </Column>
    </Row>
  );
};

export default ReactionAndInvestment;
