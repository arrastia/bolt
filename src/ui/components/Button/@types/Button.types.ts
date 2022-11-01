import type { ComponentPropsWithoutRef } from 'react';

export type ButtonAppearance = 'primary' | 'secondary' | 'default' | 'light' | 'solid';

export type ButtonStatus = 'disabled' | 'error' | 'pending';

export interface ButtonProps extends ComponentPropsWithoutRef<'button'> {
  appearance?: ButtonAppearance;
  status?: ButtonStatus;
}
