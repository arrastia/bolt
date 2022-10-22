import type { ComponentPropsWithRef } from 'react';

export type InputStatus = 'disabled' | 'error' | 'idle' | 'pending' | 'success';

export interface InputProps extends ComponentPropsWithRef<'input'> {
  label?: string;
  message?: string;
  status?: InputStatus;
}
