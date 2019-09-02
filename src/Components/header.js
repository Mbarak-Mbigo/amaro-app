import React from 'react';
import styled from 'styled-components';

import { DARK_GREY, WHITE_GREY } from '../utils/colors'

const HeaderContainer = styled.header`
  background-color: ${DARK_GREY};
  color: ${WHITE_GREY};
  height: 5rem;
  width: 100%;
  padding: 10px;
  display: flex;
  align-items: center;
`;

const Header = ({ children }) => (
  <HeaderContainer>
      {children}
  </HeaderContainer>
)

export default Header;
