import React from 'react';
import {
  AngelOneButton,
  Row,
  Title,
  ZerodhaButton,
  ButtonWrapper
} from './ChooseYourBroker.Elements';
import ZerodhaImg from 'assests/images/investor/zerodha.svg';
import AngelOneImg from 'assests/images/investor/angelone.svg';
import Image from 'next/image';

const ChooseYourBroker = () => {
  return (
    <Row>
      <Title>Choose your Broker</Title>
      <ButtonWrapper>
        <ZerodhaButton id='zerodha-button'>
          <Image src={ZerodhaImg} width={'100%'} height={40} alt='Zerodha' />
        </ZerodhaButton>
        <AngelOneButton id='angelone-button'>
          <Image src={AngelOneImg} width={'100%'} height={40} alt='AngelOne' />
        </AngelOneButton>
      </ButtonWrapper>
    </Row>
  );
};

export default ChooseYourBroker;
