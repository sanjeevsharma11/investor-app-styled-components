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
} from './Sidebar.Elements';

const Sidebar = () => {
  const router = useRouter();

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
      <div></div>
    </SidebarContainer>
  );
};

export default Sidebar;
