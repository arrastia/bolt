import { Styles } from './Button.styles';

import type { ButtonProps } from './@types/Button.types';

export function Button({ appearance = 'primary', children, className, disabled, ...rest }: ButtonProps) {
  return (
    <Styles.Button appearance={appearance} className={`${className} ${appearance}`} disabled={disabled} {...rest}>
      {children}
    </Styles.Button>
  );
}
