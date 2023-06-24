import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const Menu = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 5px;
  padding: 8px 0;
  margin-bottom: 16px;
`;

export const User = styled.span`
  gap: 12px;
  padding: 8px 0;
  color: white;
  font-size: 19px;
  font-weight: 400;
`;

export const ContactCount = styled.span`
  gap: 12px;
  padding: 8px 0;
  color: white;
  font-size: 19px;
  font-weight: 400;
`;

export const Link = styled(NavLink)`
  display: flex;
  height: 50px;
  width: 50px;
  padding: 8px 16px;
  border-radius: 4px;
  text-decoration: none;
  color: white;
  font-weight: 500;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &.active {
    color: white;
  }

  &:hover,
  &:focus {
    transform: scale(1.1);
    color: white;
  }
`;
