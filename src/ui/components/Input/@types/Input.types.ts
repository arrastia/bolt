import type { ComponentPropsWithRef, ReactNode } from 'react';

export type InputStatus = 'disabled' | 'error' | 'idle' | 'pending' | 'success';

export interface InputProps extends ComponentPropsWithRef<'input'> {
  icon?: ReactNode;
  label?: string;
  message?: string;
  onIconClick?: () => void;
  status?: InputStatus;
}
