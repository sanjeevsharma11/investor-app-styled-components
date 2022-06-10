import Image from 'next/image';
import React from 'react';
import { Header, Logo } from './MainLayoutHeader.Elements';
import HeaderLogo from 'assests/images/headers/logo.svg';
import Link from 'next/link';

const MainLayoutHeader = () => {
  return (
    <Header>
      <Link href='/'>
        <Logo>
          <Image
            src={HeaderLogo.src}
            alt='tribe_logo'
            width={100}
            height={100}
          />
        </Logo>
      </Link>
    </Header>
  );
};

export default MainLayoutHeader;
