import React, { useEffect } from 'react';
import Link from 'next/link';
import { FiLogOut } from 'react-icons/fi';
import { useRouter } from 'next/router';
import { FiBriefcase, FiCreditCard } from 'react-icons/fi';
import { AiOutlineHome } from 'react-icons/ai';
import {
  Nav,
  NavItem,
  NavItemIcon,
  NavItemText,
  SidebarContainer,
  FlexRow,
} from './Sidebar.Elements';
import { useAppDispatch, useAppSelector } from 'store/hooks';
import { logoutUser } from 'store/services/user.service';

const Sidebar = () => {
  const router = useRouter();

  const dispatch = useAppDispatch();
  const token = useAppSelector((state) => state.user.token);
  const [showLogout, setShowLogout] = React.useState(false);

  useEffect(() => {
    if (token) {
      setShowLogout(true);
    } else {
      setShowLogout(false);
    }
  }, [token]);

  const navItems = [
    {
      name: 'Home',
      icon: <AiOutlineHome />,
      link: '/',
    },
    {
      name: 'Portfolio',
      icon: <FiBriefcase />,
      link: '/portfolio',
    },
    {
      name: 'Wallet',
      icon: <FiCreditCard />,
      link: '/wallet',
    },
  ];

  return (
    <SidebarContainer>
      <div></div>
      <Nav>
        {navItems.map((item) => (
          <Link key={item.name} href={item.link}>
            <NavItem isActive={router.pathname === item.link}>
              <NavItemIcon>{item.icon}</NavItemIcon>
              <NavItemText>{item.name}</NavItemText>
            </NavItem>
          </Link>
        ))}
      </Nav>
      <div
        onClick={() => dispatch(logoutUser())}
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '10px',
        }}
      >
        {showLogout && (
          <Nav>
            <FlexRow>
              <NavItemIcon>
                <FiLogOut />
              </NavItemIcon>
              <NavItemText style={{ marginBottom: '10px' }}>Logout</NavItemText>
            </FlexRow>
          </Nav>
        )}
      </div>
    </SidebarContainer>
  );
};

export default Sidebar;
