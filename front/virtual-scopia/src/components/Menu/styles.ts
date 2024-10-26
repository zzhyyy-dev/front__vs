import styled from 'styled-components';
import { NavLink as RouterLink } from 'react-router-dom';

export const MenuContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;  
  height: 98.4vh;  
  padding: 1rem;
  background-color: #f0f0f0; 
`;

export const Logo = styled.img`
  margin-left: 32%; 
  width: 6rem;
  margin-bottom: 2.5rem;
`;

export const MenuTitle = styled.div`
  font-size: 1.125rem;
  font-weight: 600;
  margin-bottom: 1rem;
  margin-left: 1rem;
  color: #888;
`;

export const MenuList = styled.ul`
  list-style-type: none;
  padding: 0;
`;

export const MenuItem = styled.li`
  margin-bottom: 1rem;
`;

// Vamos ajustar para `activeClassName` que o `NavLink` do React Router Dom aceita
export const MenuLink = styled(RouterLink)`
  display: block;
  padding: 0.5rem 1rem;
  border-radius: 1.5rem;
  text-decoration: none;
  color: #888;
  background-color: transparent;
  box-shadow: none;
  transition: background-color 0.3s ease, box-shadow 0.3s ease;

  &.active {
    color: #333;
    background-color: #fff;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
    border: 2px solid #fff;
  }

  &:hover {
    background-color: #e5e7eb;
  }
`;

export const UserProfileWrapper = styled.div`
  margin-top: auto;  
  padding-top: 2rem;
  border-top: 1px solid #ddd;  
`;
