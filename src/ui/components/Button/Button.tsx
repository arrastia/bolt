import { Styles } from './Button.styles';

import type { ButtonProps } from './@types/Button.types';

export function Button({ appearance = 'primary', children, className, disabled, status, ...rest }: ButtonProps) {
  return (
    <Styles.Button appearance={appearance} className={`${className} ${appearance} ${status}`} disabled={disabled} {...rest}>
      {children}
    </Styles.Button>
  );
}
