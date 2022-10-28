import { Styles } from './SheetBackdrop.styles';

import type { SheetBackdropProps } from '../../@types/Sheet.types';

const isClickable = (props: any) => !!props.onClick || !!props.onTap;

export const SheetBackdrop = ({ style, ...rest }: SheetBackdropProps) => {
  const pointerEvents = isClickable(rest) ? 'auto' : 'none';

  return (
    <Styles.Backdrop
      {...rest}
      animate={{ opacity: 1 }}
      className="react-modal-sheet-backdrop"
      exit={{ opacity: 0 }}
      initial={{ opacity: 0 }}
      style={{ ...style, pointerEvents }}
    />
  );
};
