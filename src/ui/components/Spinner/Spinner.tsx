import { Styles } from './Spinner.styles';

import type { ComponentPropsWithoutRef } from 'react';

export const Spinner = ({ ...props }: ComponentPropsWithoutRef<'div'>) => (
  <Styles.Spinner {...props}>
    <i></i>
    <i></i>
    <i></i>
    <i></i>
    <i></i>
    <i></i>
    <i></i>
    <i></i>
    <i></i>
    <i></i>
    <i></i>
    <i></i>
  </Styles.Spinner>
);
