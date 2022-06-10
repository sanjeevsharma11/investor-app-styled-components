import React, { useEffect, useRef, useState } from 'react';
import { useAppSelector, useAppDispatch } from 'store/hooks';
import { verifyPayment } from 'store/services/payment.service';
import { handlePay } from 'utils/payment';
import { toast } from 'react-toastify';
import {
  Container,
  Column,
  Error,
  Section,
  Heading,
  InfoText,
  UnlockNowButton,
} from './Payment.Elements';
import { Info } from 'pages/index.elements';
import { BiRupee } from 'react-icons/bi';
import { RiLock2Fill } from 'react-icons/ri';

const getItemNameByRefType = ({ refType }: { refType: string }) => {
  switch (refType) {
    case 'Tip':
      return 'Trade';
    default:
      return 'Trade';
  }
};

const Payment = ({ refType, refId }: { refType: string; refId: string }) => {
  const dispatch = useAppDispatch();
  const payment = useAppSelector((state) => state.payment);

  const {
    payment: { order },
    isError,
    isLoading,
    message,
  } = payment;

  const [orderToken, setOrderToken] = useState('');
  const [toggle, setToggle] = useState(false);

  const handleSuccess = (data: any) => {
    toast.success(`Payment Successful`);
    dispatch(verifyPayment({ refType, refId }));
  };
  const handleFailure = (data: any) => {
    toast.error(`Payment Failed`);
    dispatch(verifyPayment({ refType, refId }));
  };

  const style = {
    'font-family': "Poppins', sans-serif",
    'font-size': '14px',
    width: '100%',
    color: '#11385b',
    errorColor: '#ff0000',
    theme: 'light', //(or light)
    buttonText: 'Pay Now',
  };

  const cashfreeRef = useRef();
  const paymentDOMRef = useRef();

  useEffect(() => {
    cashfreeRef.current = new (window as any).Cashfree();
  }, []);

  const dropConfig = {
    orderToken: orderToken,
    onSuccess: handleSuccess,
    onFailure: handleFailure,
    components: ['order-details', 'card', 'netbanking', 'app', 'upi'],
    style: style,
  };

  useEffect(() => {
    dispatch(verifyPayment({ refType, refId }));
  }, [dispatch, refType, refId]);

  // setting order token
  useEffect(() => {
    if (order && order.orderToken) {
      setOrderToken(order.orderToken);
    }
  }, [order]);

  const handlePayment = () => {
    setToggle(true);
    handlePay({
      cashfreeRef,
      paymentDOMRef,
      dropConfig,
    });
  };

  return (
    <Container>
      <Column>{isError && <Error>{message}</Error>}</Column>
      {isLoading ? (
        <Column>
          <Info>
            <h3>Please wait while we are verifying your payment status</h3>
          </Info>
        </Column>
      ) : (
        <PaymentWithUnlockButton
          handlePayment={handlePayment}
          refType={refType}
          toggle={toggle}
          setToggle={setToggle}
          paymentDOMRef={paymentDOMRef}
        />
      )}
    </Container>
  );
};

export default Payment;

const PaymentWithUnlockButton = ({
  refType = 'Tip',
  handlePayment,
  toggle,
  paymentDOMRef,
}: {
  refType: string;
  handlePayment: () => void;
  setToggle: (toggle: boolean) => void;
  toggle: boolean;
  paymentDOMRef: any;
}) => {
  const { expertInfo } = useAppSelector((state) => state.payment.payment);

  return (
    <>
      {toggle ? (
        <Section>
          <Disclaimer
            expertName={expertInfo?.name}
            refType={getItemNameByRefType({ refType })}
          />
          <section
            id='payment'
            ref={paymentDOMRef}
            style={{
              width: '100%',
            }}
          />
        </Section>
      ) : (
        <section
          style={{
            backgroundColor: '#fff',
            padding: '20px',
            borderRadius: '5px',
            margin: '0 auto',
            width: '100%',
            maxWidth: '500px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '20px',
          }}
        >
          <Heading>This {getItemNameByRefType({ refType })} is locked</Heading>
          <InfoText>
            {' '}
            This is a premium{' '}
            {getItemNameByRefType({
              refType,
            }).toLowerCase()}{' '}
            by <span className='capitalize'>Sanjeev</span>. Proceed to pay ₹
            {expertInfo?.amount} to view the {getItemNameByRefType({ refType })}
            <div
              style={{
                margin: '1rem auto',
                fontSize: '3rem',
              }}
            >
              <RiLock2Fill
                className='text-3xl m-auto w-full my-3'
                style={{
                  color: '#5589FF',
                }}
              />
            </div>
            <UnlockNowButton onClick={() => handlePayment()}>
              <span>
                <BiRupee /> {expertInfo?.amount}
              </span>
              <span> Unlock {getItemNameByRefType({ refType })}</span>
            </UnlockNowButton>
          </InfoText>
        </section>
      )}
    </>
  );
};

export const Disclaimer = ({
  expertName,
  refType,
}: {
  expertName: string;
  refType: string;
}) => {
  return (
    <>
      <div>
        <div className='flex flex-col gap-5 text-justify font-poppins w-full'>
          <h1 className='font-bold text-2xl'>Disclaimer</h1>
          <p className='font-semibold'>
            {`
             Invest With Tribe is a messaging platform enabling stock traders to
            share their trades easily. The platform helps the user in getting
            timely and reliable information and news on the stock market but
            isn't liable or responsible for the content.
            `}
          </p>
          <p className='font-semibold'>
            <span className='capitalize'>{expertName}</span>
            {`has shared his
            ${refType.toLowerCase()} only for educational and informational
            purposes only. Content of this service shouldn't be construed as
            investment or trading advice. The author/owner of this service isn't
            responsible for any profit/ loss arising out of the information
            presented here.
                `}
          </p>
          <div className='font-semibold bg-yellow-400 px-4 py-2'>
            <span className='font-bold'>Note:</span> If you are making a payment
            in incognito mode, and you are not being redirected to{' '}
            {refType.toLowerCase()} page, then you can try refresing you page
            after payment completion. And then you use our UPI id for payment
            verfication.
            <br />
            <br />
            <span className='text-xl'>UPI : tribe@upi</span>
            <br /> <br />
            Steps for payment verification :
            <br />
            <ol>
              <li>Enter the upi ID in the payment screen</li>
              <li>Click on Pay Button</li>
            </ol>
          </div>
        </div>
      </div>
    </>
  );
};
