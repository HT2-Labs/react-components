import { ReactNode } from 'react';

export enum Size {
  Small,
  Medium,
  Large,
}
export default interface IconButtonProps {
  readonly children: ReactNode;
  readonly colorOverride?: string;
  readonly disabled?: boolean | undefined;
  readonly onClick?: (e: React.MouseEvent<HTMLElement>) => void;
  readonly size?: Size;
  readonly type?: string | undefined;
  readonly ariaLabel?: string | undefined;
}
