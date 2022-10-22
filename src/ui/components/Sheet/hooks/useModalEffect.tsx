import { useEffect } from 'react';
import { applyRootStyles, cleanupRootStyles } from '../utils';
import { usePrevious } from './usePrevious';

export const useModalEffect = (isOpen: boolean, rootId?: string) => {
  const prevOpen = usePrevious(isOpen);

  // Automatically apply the iOS modal effect to the body when sheet opens/closes
  useEffect(() => {
    if (rootId && !prevOpen && isOpen) {
      applyRootStyles(rootId);
    } else if (rootId && !isOpen && prevOpen) {
      cleanupRootStyles(rootId);
    }
  }, [isOpen, prevOpen]); // eslint-disable-line

  // Make sure to cleanup modal styles on unmount
  useEffect(() => {
    return () => {
      if (rootId && isOpen) cleanupRootStyles(rootId);
    };
  }, [isOpen]); // eslint-disable-line
};
