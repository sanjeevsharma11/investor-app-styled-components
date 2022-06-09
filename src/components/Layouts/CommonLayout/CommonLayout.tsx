import MainLayoutHeader from 'components/Headers/MainLayoutHeader/MainLayoutHeader';
import {
  GlobalStylesCommonLayout,
  CommonLayoutContainer,
  Container,
} from './CommonLayout.Elements';

const CommonLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <GlobalStylesCommonLayout />
      <CommonLayoutContainer>
        <MainLayoutHeader />
        <Container>{children}</Container>
      </CommonLayoutContainer>
    </>
  );
};

export default CommonLayout;
