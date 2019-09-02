import React from 'react';
import styled from 'styled-components';
import { DARK_GREY, WHITE_GREY } from '../utils/colors';

const FooterContainer = styled.footer`
  height: 70px;
  background-color: ${DARK_GREY};
  color: ${WHITE_GREY};
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Footer = ({ children }) => (
  <FooterContainer>
      {children}
  </FooterContainer>
)

export default Footer;
