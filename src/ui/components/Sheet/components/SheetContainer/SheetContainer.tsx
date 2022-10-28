import { Styles } from './SheetContainer.styles';

import { MAX_HEIGHT } from '../../constants';

import { useEventCallbacks } from '../../hooks/useEventCallbacks';
import { useSheetContext } from '../../hooks/useSheetContext';

import type { SheetContainerProps } from '../../@types/Sheet.types';

export const SheetContainer = ({ children, style, ...rest }: SheetContainerProps) => {
  const { y, isOpen, callbacks, snapPoints, initialSnap = 0, sheetRef, windowHeight, detent, animationOptions, reduceMotion } = useSheetContext();

  const { handleAnimationComplete } = useEventCallbacks(isOpen, callbacks);
  const initialY = snapPoints ? snapPoints[0] - snapPoints[initialSnap] : 0;
  const maxSnapHeight = snapPoints ? snapPoints[0] : null;

  const height = maxSnapHeight !== null ? `min(${maxSnapHeight}px, ${MAX_HEIGHT})` : MAX_HEIGHT;

  const renderStyles = () => {
    switch (detent) {
      case 'content-height':
        return { maxHeight: height };

      case 'full-height':
        return { height };

      default:
        throw new Error(`Invalid detent value: ${detent}`);
    }
  };

  return (
    <Styles.Container
      {...rest}
      animate={{ y: initialY, transition: animationOptions }}
      className="react-modal-sheet-container"
      exit={{ y: windowHeight, transition: animationOptions }}
      initial={reduceMotion ? false : { y: windowHeight }}
      onAnimationComplete={handleAnimationComplete}
      ref={sheetRef}
      style={{ ...style, ...renderStyles(), y }}>
      {children}
    </Styles.Container>
  );
};
