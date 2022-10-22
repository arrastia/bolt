import { forwardRef, Ref } from 'react';

import { Styles } from './Input.styles';

import type { InputProps } from './@types/Input.types';

export const Input = forwardRef(({ label, message, status, readOnly, ...rest }: InputProps, ref: Ref<HTMLInputElement>) => {
  return (
    <Styles.Container>
      <Styles.Input className={status} readOnly={readOnly || status === 'pending'} ref={ref} {...rest} />
      {status === 'pending' ? <Styles.Loading /> : null}
    </Styles.Container>
  );
});
