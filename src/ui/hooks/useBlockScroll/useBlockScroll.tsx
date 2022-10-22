import { useLayoutEffect } from 'react';

import { blockScrollMobileSafari } from './utils/blockScrollMobileSafari';
import { chain } from './utils/chain';
import { isIOS } from 'ui/utils/PlatformUtils';
import { setStyle } from 'ui/utils/StylesUtils';

export const useBlockScroll = (isDisabled?: boolean) => {
  useLayoutEffect(() => {
    if (isDisabled) return;

    if (isIOS()) return blockScrollMobileSafari();

    return chain(
      setStyle(document.documentElement, 'paddingRight', `${window.innerWidth - document.documentElement.clientWidth}px`),
      setStyle(document.documentElement, 'overflow', 'hidden')
    );
  }, [isDisabled]);
};
