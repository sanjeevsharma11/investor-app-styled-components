import { useState } from 'react';
import Google from './Google/Google';
import Facebook from './Facebook/Facebook';
import Truecaller from './Truecaller/Truecaller';
import { toast } from 'react-toastify';
import { useAppDispatch, useAppSelector } from 'store/hooks';
import { facebookLogin, googleLogin } from 'store/services/user.service';
import DrawerTribeLogo from 'assests/images/logo/tribe_logo.svg';
import Link from 'next/link';
import {
  AuthCardContainer,
  Overlay,
  RelativeContainer,
  Row,
  Logo,
} from './AuthCard.Elements';
import Image from 'next/image';

const AuthCard = () => {
  const dispatch = useAppDispatch();
  const { token } = useAppSelector((state) => state.user);

  const responseGoogle = (response: any) => {
    if (response.tokenId) {
      dispatch(googleLogin({ idToken: response.tokenId, role: 'retailer' }));
    }
  };

  const responseFacebook = (response: any) => {
    if (response.accessToken) {
      dispatch(
        facebookLogin({
          accessToken: response.accessToken,
          userId: response.userID,
          role: 'retailer',
        })
      );
    }
  };

  const responseTrueCaller = (response: any) => {};

  const [checked, setChecked] = useState(false);

  return (
    <AuthCardContainer>
      <Logo src={DrawerTribeLogo.src} alt='tribe_logo' />
      <RelativeContainer>
        {!checked && (
          <Overlay
            onClick={() => toast.warn('Please accept the terms and conditions')}
          />
        )}

        <Google informParent={responseGoogle} />
        <Facebook informParent={responseFacebook} />
        <Truecaller informParent={responseTrueCaller} />
      </RelativeContainer>

      <Row className='text-center w-72 border-b-2 flex gap-1 justify-center'>
        <label>
          <input
            type={'checkbox'}
            checked={checked}
            onChange={() => setChecked(!checked)}
          />
        </label>

        <div>
          By signing up, you agree to our{' '}
          <Link href='/termsandconditions'>Terms and Conditions</Link>
        </div>
      </Row>
    </AuthCardContainer>
  );
};

export default AuthCard;
