import Image from 'next/image';
import React from 'react';
import { Header, Logo } from './MainLayoutHeader.Elements';
import HeaderLogo from 'assests/images/headers/logo.svg';

const MainLayoutHeader = () => {
  return (
    <Header>
      <Logo>
        <Image src={HeaderLogo.src} alt='tribe_logo' width={100} height={100} />
      </Logo>
    </Header>
  );
};

export default MainLayoutHeader;
