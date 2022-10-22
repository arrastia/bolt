import { forwardRef } from 'react';
import { motion, useTransform } from 'framer-motion';

import styles from '../../Sheet.styles';

import { useSheetContext } from '../../hooks/useSheetContext';

import type { SheetDraggableProps } from '../../@types/Sheet.types';

export const SheetHeader = forwardRef<any, SheetDraggableProps>(({ children, style, disableDrag, ...rest }, ref) => {
  const { indicatorRotation, dragProps } = useSheetContext();
  const _dragProps = disableDrag ? undefined : dragProps;

  const indicator1Transform = useTransform(indicatorRotation, r => `translateX(2px) rotate(${r}deg)`);

  const indicator2Transform = useTransform(indicatorRotation, r => `translateX(-2px) rotate(${-1 * r}deg)`);

  return (
    <motion.div {...rest} ref={ref} style={{ ...styles.headerWrapper, ...style }} {..._dragProps}>
      {children || (
        <div className="react-modal-sheet-header" style={styles.header}>
          <motion.span className="react-modal-sheet-drag-indicator" style={{ ...styles.indicator, transform: indicator1Transform }} />
          <motion.span className="react-modal-sheet-drag-indicator" style={{ ...styles.indicator, transform: indicator2Transform }} />
        </div>
      )}
    </motion.div>
  );
});
