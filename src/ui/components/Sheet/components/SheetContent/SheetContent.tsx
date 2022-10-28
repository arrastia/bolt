import { forwardRef } from 'react';

import { Styles } from './SheetContent.styles';

import { useSheetContext } from '../../hooks/useSheetContext';

import type { SheetDraggableProps } from '../../@types/Sheet.types';

export const SheetContent = forwardRef<any, SheetDraggableProps>(({ children, style, disableDrag, ...rest }, ref) => {
  const { dragProps } = useSheetContext();

  const _dragProps = disableDrag ? undefined : dragProps;

  return (
    <Styles.Content {...rest} className="react-modal-sheet-content" ref={ref} style={{ ...style }} {..._dragProps}>
      {children}
    </Styles.Content>
  );
});
