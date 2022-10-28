import { forwardRef } from 'react';
import { useTransform } from 'framer-motion';

import { Styles } from './SheetHeader.styles';

import { useSheetContext } from '../../hooks/useSheetContext';

import type { SheetDraggableProps } from '../../@types/Sheet.types';

export const SheetHeader = forwardRef<any, SheetDraggableProps>(({ children, style, disableDrag, ...rest }, ref) => {
  const { indicatorRotation, dragProps } = useSheetContext();

  const _dragProps = disableDrag ? undefined : dragProps;

  const indicator1Transform = useTransform(indicatorRotation, rotation => `translateX(2px) rotate(${rotation}deg)`);

  const indicator2Transform = useTransform(indicatorRotation, rotation => `translateX(-2px) rotate(${-1 * rotation}deg)`);

  return (
    <Styles.HeaderWrapper {...rest} ref={ref} style={style} {..._dragProps}>
      {children || (
        <Styles.Header className="react-modal-sheet-header">
          <Styles.Indicator className="react-modal-sheet-drag-indicator" style={{ transform: indicator1Transform }} />
          <Styles.Indicator className="react-modal-sheet-drag-indicator" style={{ transform: indicator2Transform }} />
        </Styles.Header>
      )}
    </Styles.HeaderWrapper>
  );
});
