import * as React from 'react';
import buttonStyle from '../utils/buttonBasicStyles';
import buttonColorStyles from '../utils/buttonColorStyles';
import buttonGhostStyle from '../utils/buttonGhostStyles';
import ButtonProps from './buttonProps';

export default ({
  children,
  danger = false,
  disabled = false,
  fullWidth = false,
  onClick,
  type,
}: ButtonProps) => {

  // Add to buttonColorStyles to set text color in place of background color
  const useTextColor = true;

  const Button = buttonStyle({ fullWidth, disabled });
  const color = buttonColorStyles({ danger, disabled, useTextColor });
  const ButtonGhost = buttonGhostStyle({ Button, color, disabled });

  return (
    <ButtonGhost
      disabled={disabled}
      onClick={onClick}
      type={type}
    >
      {children}
    </ButtonGhost>
  );
};