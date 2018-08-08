import * as React from 'react';
import buttonStyle from '../utils/buttonBasicStyles';
import buttonColorStyles from '../utils/buttonColorStyles';
import buttonInvisibleStyle from '../utils/buttonInvisibleStyles';
import ButtonProps from './buttonProps';

export default ({
  children,
  danger = false,
  disabled = false,
  fullWidth = false,
  useTextColor = false,
  onClick,
}: ButtonProps) => {

  const Button = buttonStyle({ fullWidth, disabled });
  const color = buttonColorStyles({ danger, disabled, useTextColor });
  const InvisibleButton = buttonInvisibleStyle({ Button, color });

  return (
    <InvisibleButton
      disabled={disabled}
      onClick={onClick}
      role={'button'}
    >
      {children}
    </InvisibleButton>
  );
};
