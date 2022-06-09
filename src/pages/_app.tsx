import CommonLayout from 'components/Layouts/CommonLayout/CommonLayout';
import MainLayout from 'components/Layouts/MainLayout/MainLayout';
import type { AppProps } from 'next/app';
import { wrapper } from '../store/index';

const pathNames = ['/[id]', '/termsandconditions'];

function MyApp({ Component, pageProps, router }: AppProps) {
  if (pathNames.includes(router.pathname)) {
    return (
      <CommonLayout>
        <Component {...pageProps} />
      </CommonLayout>
    );
  }

  return (
    <MainLayout>
      <Component {...pageProps} />
    </MainLayout>
  );
}

export default wrapper.withRedux(MyApp);
