import { Styles } from './SheetContent.styles';

import { useSheetContext } from '../../hooks/useSheetContext';

import type { SheetDraggableProps } from '../../@types/Sheet.types';

export const SheetContent = ({ children, isDragDisabled, style, ...rest }: SheetDraggableProps) => {
  const { dragProps } = useSheetContext();

  const _dragProps = isDragDisabled ? undefined : dragProps;

  return (
    <Styles.Content {...rest} className="react-modal-sheet-content" style={{ ...style }} {..._dragProps}>
      {children}
    </Styles.Content>
  );
};
