import { forwardRef, useEffect, useImperativeHandle, useLayoutEffect, useMemo, useRef } from 'react';
import { createPortal } from 'react-dom';

import { animate, AnimatePresence, useMotionValue, useReducedMotion } from 'framer-motion';

import { Styles } from './Sheet.styles';

import { SheetBackdrop } from './components/SheetBackdrop';
import { SheetContainer } from './components/SheetContainer';
import { SheetContent } from './components/SheetContent';
import { SheetHeader } from './components/SheetHeader';

import { useBlockScroll } from 'ui/hooks/useBlockScroll';
import { useBreakpoints } from 'ui/hooks/useBreakpoints';
import { useDrag } from './hooks/useDrag';
import { useModalEffect } from './hooks/useModalEffect';
import { useWindowHeight } from './hooks/useWindowHeight';

import { SheetContext } from './context/SheetContext';

import { DEFAULT_SPRING_CONFIG } from './constants';

import { inDescendingOrder, validateSnapTo } from './utils';

import type { AnimationOptions } from 'framer-motion';
import type { Ref } from 'react';
import type { SheetContextType, SheetProps } from './@types/Sheet.types';

const sheetsPortal = document.getElementById('bottom-sheet') as HTMLElement;
const detent = 'full-height';
const prefersReducedMotion = false;

export const Sheet = forwardRef(
  (
    {
      children,
      header,
      initialSnap = 0,
      isOpen,
      onClose,
      onCloseEnd,
      onCloseStart,
      onOpenEnd,
      onOpenStart,
      onSnap,
      rootId,
      snapPoints,
      springConfig = DEFAULT_SPRING_CONFIG,
      ...rest
    }: SheetProps,
    ref: Ref<any>
  ) => {
    const sheetRef = useRef<HTMLDivElement>(null);

    const indicatorRotation = useMotionValue(0);
    const shouldReduceMotion = useReducedMotion();
    const windowHeight = useWindowHeight();

    const { breakpoint } = useBreakpoints();

    const reduceMotion = Boolean(prefersReducedMotion || shouldReduceMotion);
    const animationOptions: AnimationOptions<number> = reduceMotion ? { type: 'tween', duration: 0.01 } : { type: 'spring', ...springConfig };

    const y = useMotionValue(0);

    const callbacks = useRef({ onCloseEnd, onCloseStart, onOpenEnd, onOpenStart });

    useLayoutEffect(() => {
      callbacks.current = { onCloseEnd, onCloseStart, onOpenEnd, onOpenStart };
    }, [onCloseEnd, onCloseStart, onOpenEnd, onOpenStart]);

    const { onDrag, onDragEnd } = useDrag({ animationOptions, indicatorRotation, onClose, onSnap, sheetRef, snapPoints, y });

    if (snapPoints) {
      // Convert negative / percentage snap points to absolute values
      snapPoints = snapPoints.map(point => {
        // Percentage values e.g. between 0.0 and 1.0
        if (point > 0 && point <= 1) return Math.round(point * windowHeight);
        return point < 0 ? windowHeight + point : point; // negative values
      });

      console.assert(inDescendingOrder(snapPoints) || windowHeight === 0, `Snap points need to be in descending order got: [${snapPoints}]`);
    }

    useEffect(() => {
      if (!snapPoints || !onSnap) return;

      onSnap(isOpen ? initialSnap : snapPoints.length - 1);
    }, [isOpen]); // eslint-disable-line

    useImperativeHandle(ref, () => ({ snapTo, y }));

    useModalEffect(isOpen, rootId);

    useBlockScroll(!isOpen);

    const dragProps: SheetContextType['dragProps'] = useMemo(
      () => ({ drag: 'y', dragConstraints: { top: 0, bottom: 0 }, dragElastic: 0, dragMomentum: false, onDrag, onDragEnd }),
      [] // eslint-disable-line
    );

    const snapTo = (snapIndex: number) => {
      const sheetEl = sheetRef.current;

      if (snapPoints && snapPoints[snapIndex] !== undefined && sheetEl !== null) {
        const sheetHeight = sheetEl.getBoundingClientRect().height;
        const snapPoint = snapPoints[snapIndex];
        const snapTo = validateSnapTo({ snapTo: sheetHeight - snapPoint, sheetHeight });

        animate(y, snapTo, animationOptions);

        if (onSnap) onSnap(snapIndex);
        if (snapTo >= sheetHeight) onClose();
      }
    };

    const context: SheetContextType = {
      animationOptions,
      callbacks,
      detent,
      dragProps,
      indicatorRotation,
      initialSnap,
      isOpen,
      reduceMotion,
      sheetRef,
      snapPoints,
      windowHeight,
      y
    };

    const renderContent = () => (
      <SheetContainer>
        <SheetHeader>{header}</SheetHeader>
        <SheetContent isDragDisabled={true}>{children}</SheetContent>
      </SheetContainer>
    );

    const renderSheet = () => (
      <SheetContext.Provider value={context}>
        <Styles.Wrapper {...rest} ref={ref}>
          <AnimatePresence>{isOpen ? renderContent() : null}</AnimatePresence>
          {/* {isOpen ? <SheetBackdrop /> : null} */}
        </Styles.Wrapper>
      </SheetContext.Provider>
    );

    return createPortal(breakpoint === 'xs' ? renderSheet() : null, sheetsPortal);
  }
);
