import CommonLayout from 'components/Layouts/CommonLayout/CommonLayout';
import MainLayout from 'components/Layouts/MainLayout/MainLayout';
import type { AppProps } from 'next/app';
import { wrapper } from '../store/index';
import Toaster from 'components/Toaster/Toaster';

const pathNames = ['/[id]', '/termsandconditions'];

function MyApp({ Component, pageProps, router }: AppProps) {
  if (pathNames.includes(router.pathname)) {
    return (
      <CommonLayout>
        <Toaster />
        <Component {...pageProps} />
      </CommonLayout>
    );
  }

  return (
    <MainLayout>
      <Toaster />
      <Component {...pageProps} />
    </MainLayout>
  );
}

export default wrapper.withRedux(MyApp);
