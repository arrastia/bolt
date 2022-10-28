import { forwardRef } from 'react';
import { motion } from 'framer-motion';

import styles from '../../BottomSheet.styles';

import type { SheetBackdropProps } from '../../@types/Sheet.types';

const isClickable = (props: any) => !!props.onClick || !!props.onTap;

export const SheetBackdrop = forwardRef<any, SheetBackdropProps>(({ style = {}, ...rest }, ref) => {
  const pointerEvents = isClickable(rest) ? 'auto' : 'none';

  return (
    <motion.div
      {...rest}
      animate={{ opacity: 1 }}
      className="react-modal-sheet-backdrop"
      exit={{ opacity: 0 }}
      initial={{ opacity: 0 }}
      ref={ref}
      style={{ ...styles.backdrop, ...style, pointerEvents }}
    />
  );
});
