import FeedCardExpertStats from 'components/Cards/Expert/FeedCardExpertStats';
import FeedDetailCard from 'components/Cards/Investor/FeedDetailCard/FeedDetailCard';
import React from 'react';
import styled from 'styled-components';

/*----------------STYLES-------------------------------- */
const FeedCardWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  padding: 1rem;
  border-radius: 0.5rem;
`;

/*----------------STYLES END-------------------------------- */

const FeedDetailPage = () => {
  return (
    <>
      <FeedCardWrapper>
        <FeedCardExpertStats />
        <FeedDetailCard />
      </FeedCardWrapper>
    </>
  );
};

export default FeedDetailPage;
