import { Payment } from 'store/types/payment.types';

export const handlePay = ({
  dropConfig,
  paymentDOMRef,
  cashfreeRef,
}: Payment) => {
  setTimeout(() => {
    cashfreeRef.current.initialiseDropin(paymentDOMRef.current, dropConfig);
  }, 2000);
};
