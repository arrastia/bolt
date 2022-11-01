import { Styles } from './CaretIcon.styles';

import type { CaretIconProps } from './@types/CaretIcon.types';

export const CaretIcon = ({ isActive, isInvalid, onCaretMouseDown }: CaretIconProps) => {
  return (
    <Styles.IndicatorIcon onMouseDown={onCaretMouseDown} onTouchEnd={onCaretMouseDown}>
      <Styles.Caret aria-hidden isActive={isActive} isInvalid={isInvalid} />
    </Styles.IndicatorIcon>
  );
};
