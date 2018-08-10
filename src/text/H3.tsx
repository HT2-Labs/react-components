import * as React from 'react';
import styled from 'styled-components';
import fontStyle from '../utils/fontStyle';
import TextProps from './TextProps';
import { getFontSize } from './textStyle';

const H3 = ({
  color = String(({ theme }: any ) => theme.color.Button),
  italic,
  strong,
  size,
  children,
 }: TextProps) => {
  const Header = styled.h3`
    color: ${color};
    font-size: ${getFontSize(size)};
    margin: 0;
  `;

  return (
    <Header>
      {fontStyle({italic, strong, children}) }
    </Header>
  );
};

export default H3;
