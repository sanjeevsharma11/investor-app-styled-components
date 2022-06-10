import FeedCardExpertStats from 'components/Cards/Expert/FeedCardExpertStats';
import FeedDetailCard from 'components/Cards/Investor/FeedDetailCard/FeedDetailCard';
import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useAppDispatch, useAppSelector } from 'store/hooks';
import { getFeed } from 'store/services/feed.service';
import { useRouter } from 'next/router';
import { verifyPayment } from 'store/services/payment.service';
import { IFeedDocument } from 'store/types/feed.types';
import BlurBackgroundImage from 'assests/images/investor/blur_view.jpg';
import Payment from 'components/Payment/Payment';
import AuthCard from 'components/Auth';

/*----------------STYLES-------------------------------- */
const FeedCardWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  max-width: 700px;
  margin: 0 auto;
  border-radius: 0.5rem;
`;

const BlurBackground = styled.div`
  height: 100%;
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  object-fit: cover;
  background-color: rgba(0, 0, 0, 0.5);
  background-image: url(${BlurBackgroundImage.src});
  background-size: cover;
  background-position: center;
  z-index: -1;
  transition: all 0.5s ease-in-out;

  &:hover {
    cursor: pointer;
  }
`;

/*----------------STYLES END-------------------------------- */

const FeedDetailPage = () => {
  const router = useRouter();

  const { id } = router.query;
  const dispatch = useAppDispatch();
  const {
    feed: FEED,
  }: {
    feed: IFeedDocument;
  } = useAppSelector((state) => state.feed);
  const { status } = useAppSelector((state) => state.payment.payment);
  const { token } = useAppSelector((state) => state.user);

  const [paymentStatus, setPaymentStatus] = React.useState(false);
  const [isLoggedIn, setIsLoggedIn] = React.useState(false);

  useEffect(() => {
    if (id) {
      dispatch(
        getFeed({
          feedId: id as string,
        })
      );
      dispatch(
        verifyPayment({
          refId: id as string,
          refType: 'Tip',
        })
      );
    }
  }, [dispatch, id]);

  useEffect(() => {
    if (status) {
      setPaymentStatus(status);
    }

    if (token) {
      setIsLoggedIn(true);
    }

    if (!status && !token) {
      setIsLoggedIn(false);
    }
  }, [status, token]);

  const {
    feed,
    user,
    portfolio,
    strategy,
    feedReturn,
    bullishOrBearish,
    upsideInPercent,
    minInvestment,
    instrumentReturn,
  } = FEED as IFeedDocument;

  return (
    <>
      {paymentStatus && feed ? (
        <FeedCardWrapper>
          <FeedCardExpertStats user={user} />
          <FeedDetailCard
            feed={feed}
            portfolio={portfolio}
            strategy={strategy}
            feedReturn={feedReturn}
            bullishOrBearish={bullishOrBearish}
            upsideInPercent={upsideInPercent}
            minInvestment={minInvestment}
            instrumentReturn={instrumentReturn}
          />
        </FeedCardWrapper>
      ) : (
        <>
          {isLoggedIn ? (
            <>
              <BlurBackground />
              <Payment refId={id as string} refType='Tip' />
            </>
          ) : (
            <>
              <BlurBackground />
              <div
                style={{
                  position: 'fixed',
                  bottom: '0',
                  left: '0',
                  width: '100%',
                  background: 'rgba(265,265,265, 1)',
                  padding: '1rem',
                }}
              >
                <AuthCard />
              </div>
            </>
          )}
        </>
      )}
    </>
  );
};

export default FeedDetailPage;
