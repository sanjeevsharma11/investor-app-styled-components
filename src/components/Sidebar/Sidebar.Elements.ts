import styled from 'styled-components';

export const SidebarContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background: #f6f6f6;
  padding: 0 2rem;
  width: 100%;
  height: 100vh;

  @media (max-width: 920px) {
    display: none;
  }
`;

export const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 2rem;
  padding: 0 2rem;
  width: 100%;
`;

export const NavItem = styled.div(({ isActive }: { isActive: boolean }) => [
  {
    padding: '0.5rem 1rem',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    borderRadius: '0.6rem',
    gap: '1rem',
    color: '#023047',
    width: '20rem',
  },
  isActive && {
    backgroundColor: '#023047',
    color: '#fff',
  },
]);

export const NavItemIcon = styled.div`
  font-size: 2rem;
  margin-top: 0.5rem;
`;

export const NavItemText = styled.span`
  font-size: 2rem;
`;
