import React, { useCallback, useEffect, useState } from 'react';
import FeedCard from 'components/Cards/Feed/FeedCard';
import useFetchFeeds from 'hooks/useFetchFeeds';
import {
  HomeContainer,
  Error,
  Box,
  Info,
  TermsAndConditions,
  TermsAndConditionsLink,
  LoadButton,
} from './index.elements';
import Drawer from 'components/Drawer/Drawer';
import AuthCard from 'components/Auth';

const Home = () => {
  const [skip, setSkip] = useState(0);
  const [limit, setlimit] = useState(10);

  const { feeds, loading, error, hasMore } = useFetchFeeds({
    skip,
    limit,
  });

  const handleLoadMore = useCallback(() => {
    setSkip((prevPage) => prevPage + limit);
  }, [limit]);

  /**
   * infinite scroll using ref and observer
   */
  const observer = React.useRef<IntersectionObserver>();
  const lastFeed = React.useRef<HTMLDivElement>(null);

  const handleIntersection = useCallback(
    (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && hasMore) {
          handleLoadMore();
          if (limit >= 20) {
            setlimit(10);
          }
        }
      });
    },
    [hasMore, handleLoadMore, limit]
  );

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: '1000px',
      threshold: 1,
    };
    observer.current = new IntersectionObserver(handleIntersection, options);
    lastFeed.current && observer.current.observe(lastFeed.current);
    return () => {
      observer.current!.disconnect();
    };
  }, [hasMore, handleIntersection]);

  const [showSignUpDrawer, setShowSignUpDrawer] = useState(false);
  const [showPaymentModel, setShowPaymentModel] = useState(false);
  const [refId, setRefId] = useState('');

  return (
    <HomeContainer>
      <Drawer
        open={showSignUpDrawer}
        onClose={setShowSignUpDrawer}
        style={`
           padding: 3rem 1rem;
          bottom: 0;
          height: auto;
          background: white;
          z-index: 10;
          width: 100%;

          @media screen and (min-width:920px) {
          width: 80%;
          }
        `}
      >
        <AuthCard />
      </Drawer>

      {feeds.map((feed) => (
        <FeedCard
          key={feed._id}
          feed={feed}
          setShowSignUpDrawer={setShowSignUpDrawer}
          setShowPaymentModel={setShowPaymentModel}
          refId={refId}
          setRefId={setRefId}
        />
      ))}
      {error && <Error>Something went wrong. Please try again later.</Error>}
      {loading && 'Loading...'}

      {hasMore ? (
        <div ref={lastFeed}>
          <LoadButton onClick={handleLoadMore}>Load More</LoadButton>
        </div>
      ) : (
        <Box>
          <Info>No more feeds to load.</Info>
          <Info>
            <p>
              The traders here might not be SEBI registered intermediaries.
              These ideas are not trade recommendations. They are for the
              purpose of sharing trade ideas / educational purposes. Please
              consult SEBI registered intermediaries for investment advice
            </p>
            <TermsAndConditions>
              <TermsAndConditionsLink href='/termsandconditions'>
                Terms and Conditions
              </TermsAndConditionsLink>
            </TermsAndConditions>
          </Info>
        </Box>
      )}
    </HomeContainer>
  );
};

export default Home;
