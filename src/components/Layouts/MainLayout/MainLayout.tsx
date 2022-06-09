import MainLayoutHeader from 'components/Headers/MainLayoutHeader/MainLayoutHeader';
import Sidebar from 'components/Sidebar/Sidebar';
import {
  GlobalStylesMainLayout,
  MainLayoutContainer,
  RightSideBar,
} from './MainLayout.Elements';

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <GlobalStylesMainLayout />
      <MainLayoutContainer>
        <MainLayoutHeader />
        <Sidebar />
        <section>{children}</section>
        {/* <RightSideBar>
        </RightSideBar> */}
      </MainLayoutContainer>
    </>
  );
};

export default MainLayout;
