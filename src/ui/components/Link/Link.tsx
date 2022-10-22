import { Styles } from './Link.styles';

import type { ComponentPropsWithoutRef } from 'react';

export const Link = ({ children, ...rest }: ComponentPropsWithoutRef<'a'>) => {
  return <Styles.Link {...rest}>{children}</Styles.Link>;
};
