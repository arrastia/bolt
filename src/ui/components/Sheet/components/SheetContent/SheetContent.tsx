import { forwardRef } from 'react';
import { motion } from 'framer-motion';

import styles from '../../BottomSheet.styles';

import { useSheetContext } from '../../hooks/useSheetContext';

import type { SheetDraggableProps } from '../../@types/Sheet.types';

export const SheetContent = forwardRef<any, SheetDraggableProps>(({ children, style, disableDrag, ...rest }, ref) => {
  const { dragProps } = useSheetContext();

  const _dragProps = disableDrag ? undefined : dragProps;

  return (
    <motion.div {...rest} className="react-modal-sheet-content" ref={ref} style={{ ...styles.content, ...style }} {..._dragProps}>
      {children}
    </motion.div>
  );
});
