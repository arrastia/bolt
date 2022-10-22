import { forwardRef } from 'react';
import { motion } from 'framer-motion';

import styles from '../../Sheet.styles';

import { MAX_HEIGHT } from '../../constants';

import { useSheetContext } from '../../hooks/useSheetContext';
import { useEventCallbacks } from '../../hooks/useEventCallbacks';

import { mergeRefs } from 'ui/utils/CommonUtils';

import type { SheetContainerProps } from '../../@types/Sheet.types';

export const SheetContainer = forwardRef<any, SheetContainerProps>(({ children, style = {}, ...rest }, ref) => {
  const { y, isOpen, callbacks, snapPoints, initialSnap = 0, sheetRef, windowHeight, detent, animationOptions, reduceMotion } = useSheetContext();

  const { handleAnimationComplete } = useEventCallbacks(isOpen, callbacks);
  const initialY = snapPoints ? snapPoints[0] - snapPoints[initialSnap] : 0;
  const maxSnapHeight = snapPoints ? snapPoints[0] : null;

  const height = maxSnapHeight !== null ? `min(${maxSnapHeight}px, ${MAX_HEIGHT})` : MAX_HEIGHT;

  return (
    <motion.div
      {...rest}
      animate={{ y: initialY, transition: animationOptions }}
      className="react-modal-sheet-container"
      exit={{ y: windowHeight, transition: animationOptions }}
      initial={reduceMotion ? false : { y: windowHeight }}
      onAnimationComplete={handleAnimationComplete}
      ref={mergeRefs([sheetRef, ref])}
      style={{
        ...styles.container,
        ...style,
        ...(detent === 'full-height' && { height }),
        ...(detent === 'content-height' && { maxHeight: height }),
        y
      }}>
      {children}
    </motion.div>
  );
});
