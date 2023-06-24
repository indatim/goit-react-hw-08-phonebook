import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const SignRegBlock = styled.div`
    display: flex;
    gap: 5px;
`

export const Link = styled(NavLink)`
  text-decoration: none;
  color: black;
  font-weight: 500;
  justify-content: center;
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  &:focus {
    color: #3b0ab4;
  }
`;
