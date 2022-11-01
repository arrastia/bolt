import { memo } from 'react';

import { Styles } from './IndicatorIcons.styles';

import { CaretIcon } from './components/CaretIcon';
import { ClearIcon } from './components/ClearIcon';
import { Spinner } from 'ui/components/Spinner';

import type { IndicatorIconsProps } from './@types/IndicatorIcons.types';

export const IndicatorIcons = memo<IndicatorIconsProps>(({ isInvalid, isLoading, isMenuOpen, onCaretMouseDown, onClearMouseDown, showClear }) => {
  const renderIndicatorIcon = () => (
    <Styles.IndicatorIcon onMouseDown={onClearMouseDown} onTouchEnd={onClearMouseDown}>
      <ClearIcon />
    </Styles.IndicatorIcon>
  );

  return (
    <Styles.IndicatorIconsWrapper>
      {showClear && !isLoading ? renderIndicatorIcon() : null}
      {isLoading ? <Spinner /> : null}
      <Styles.Separator role="none" />
      <CaretIcon isActive={isMenuOpen} isInvalid={isInvalid} onCaretMouseDown={onCaretMouseDown} />
    </Styles.IndicatorIconsWrapper>
  );
});
