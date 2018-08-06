import * as React from 'react';
import styled from 'styled-components';
import TextProps from './TextProps';
import { getFontSize } from './textStyle';

export default ({ children, size }: TextProps) => {
  const Label = styled.label`
    display: block;
    color: ${({ theme }) => theme.colorText};
    font-size: ${getFontSize(size)};
  `;

  return (
    <Label>
      {children}
    </Label>
  );
};