import type { ComponentPropsWithRef, ReactNode } from 'react';

export type InputStatus = 'disabled' | 'error' | 'idle' | 'pending' | 'success';

export interface InputProps extends ComponentPropsWithRef<'input'> {
  action?: ReactNode;
  icon?: ReactNode;
  label?: string;
  message?: string;
  status?: InputStatus;
}
