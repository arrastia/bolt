import { forwardRef } from 'react';

import { Styles } from './Input.styles';

import type { InputProps } from './@types/Input.types';
import type { Ref } from 'react';

export const Input = forwardRef(({ icon, label, message, onIconClick, readOnly, status, ...rest }: InputProps, ref: Ref<HTMLInputElement>) => {
  return (
    <Styles.Container>
      {icon && icon}
      <Styles.Input className={status} readOnly={readOnly || status === 'pending'} ref={ref} {...rest} />
      {status === 'pending' ? <Styles.Loading /> : null}
    </Styles.Container>
  );
});
