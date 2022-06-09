import FeedCardExpertStats from 'components/Cards/Expert/FeedCardExpertStats';
import React from 'react';
import styled from 'styled-components';

/*----------------STYLES-------------------------------- */
const FeedCardExpertWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
  padding: 1rem;
  border-radius: 0.5rem;
`;

/*----------------STYLES END-------------------------------- */

const FeedDetailPage = () => {
  return (
    <FeedCardExpertWrapper>
      <FeedCardExpertStats />
    </FeedCardExpertWrapper>
  );
};

export default FeedDetailPage;
