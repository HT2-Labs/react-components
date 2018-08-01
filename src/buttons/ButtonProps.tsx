import { ReactNode } from 'react';

export enum ButtonType {
  Ghost,
  Invisible,
}

export default interface ButtonProps {
  readonly children: ReactNode;
  readonly danger?: boolean | undefined;
  readonly disabled?: boolean | undefined;
  readonly fullWidth?: boolean | undefined;
  readonly ghostColor?: string;
  readonly onClick?: (e: React.MouseEvent<HTMLElement>) => void;
  readonly type?: ButtonType;
  readonly color?: string;
  readonly height?: number | string;
  readonly width?: number | string;
}
