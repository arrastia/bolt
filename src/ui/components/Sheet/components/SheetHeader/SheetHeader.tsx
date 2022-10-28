import { useTransform } from 'framer-motion';

import { Styles } from './SheetHeader.styles';

import { useSheetContext } from '../../hooks/useSheetContext';

import type { SheetDraggableProps } from '../../@types/Sheet.types';

const useIndicator = () => {
  const { indicatorRotation } = useSheetContext();

  const indicatorX = useTransform(indicatorRotation, rotation => `translateX(2px) rotate(${rotation}deg)`);
  const indicatorY = useTransform(indicatorRotation, rotation => `translateX(-2px) rotate(${-1 * rotation}deg)`);

  return { x: indicatorX, y: indicatorY };
};

export const SheetHeader = ({ children, style, isDragDisabled, ...rest }: SheetDraggableProps) => {
  const { dragProps } = useSheetContext();
  const { x, y } = useIndicator();

  return (
    <Styles.HeaderWrapper {...rest} style={style} {...(isDragDisabled ? undefined : dragProps)}>
      <Styles.Header className="react-modal-sheet-header">
        <Styles.Indicator className="react-modal-sheet-drag-indicator" style={{ transform: x }} />
        <Styles.Indicator className="react-modal-sheet-drag-indicator" style={{ transform: y }} />
      </Styles.Header>
      {children}
    </Styles.HeaderWrapper>
  );
};
