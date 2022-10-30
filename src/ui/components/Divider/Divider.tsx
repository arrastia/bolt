import { Styles } from './Divider.styles';

import type { DividerProps } from './@types/Divider.types';

export const Divider = ({ direction = 'horizontal' }: DividerProps) => <Styles.Divider direction={direction} />;
