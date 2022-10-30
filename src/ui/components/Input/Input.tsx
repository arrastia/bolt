import { forwardRef, Ref } from 'react';

import { Styles } from './Input.styles';

import type { InputProps } from './@types/Input.types';

export const Input = forwardRef(({ icon, label, message, onIconClick, readOnly, status, ...rest }: InputProps, ref: Ref<HTMLInputElement>) => {
  return (
    <Styles.Container>
      {icon && <Styles.Icon onClick={onIconClick}>{icon}</Styles.Icon>}
      <Styles.Input className={status} readOnly={readOnly || status === 'pending'} ref={ref} {...rest} />
      {status === 'pending' ? <Styles.Loading /> : null}
    </Styles.Container>
  );
});
