import { forwardRef } from 'react';

import { Styles } from './Input.styles';

import type { InputProps } from './@types/Input.types';
import type { Ref } from 'react';

export const Input = forwardRef(({ action, icon, label, message, readOnly, status, ...rest }: InputProps, ref: Ref<HTMLInputElement>) => {
  return (
    <Styles.Container className={status}>
      {icon && icon}
      <Styles.Input readOnly={readOnly || status === 'pending'} ref={ref} {...rest} />
      {action && action}
      {status === 'pending' ? <Styles.Loading /> : null}
    </Styles.Container>
  );
});
