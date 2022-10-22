/* eslint-disable react/no-array-index-key */
import { Children, cloneElement, forwardRef, useEffect, useImperativeHandle, useMemo, useRef } from 'react';
import { createPortal } from 'react-dom';

import { animate, AnimatePresence, AnimationOptions, PanInfo, useMotionValue, useReducedMotion } from 'framer-motion';

import styles from './Sheet.styles';

import { useBlockScroll } from 'ui/hooks/useBlockScroll/useBlockScroll';
import { useEvent } from './hooks/useEvent';
import { useIsomorphicLayoutEffect } from './hooks/useIsomorphicLayoutEffect';
import { useModalEffect } from './hooks/useModalEffect';
import { useWindowHeight } from './hooks/useWindowHeight';

import { DEFAULT_SPRING_CONFIG, DRAG_CLOSE_THRESHOLD, DRAG_VELOCITY_THRESHOLD, IS_SSR } from './constants';

import { SheetContext } from './context/SheetContext';

import { getClosest, inDescendingOrder, validateSnapTo } from './utils';

import type { SheetContextType, SheetProps } from './@types/Sheet.types';

export const Sheet = forwardRef<any, SheetProps>(
  (
    {
      children,
      detent = 'full-height',
      disableDrag = false,
      initialSnap = 0,
      isOpen,
      mountPoint,
      onClose,
      onCloseEnd,
      onCloseStart,
      onOpenEnd,
      onOpenStart,
      onSnap,
      prefersReducedMotion = false,
      rootId,
      snapPoints,
      springConfig = DEFAULT_SPRING_CONFIG,
      style,
      ...rest
    },
    ref
  ) => {
    const sheetRef = useRef<any>(null);
    const indicatorRotation = useMotionValue(0);
    const windowHeight = useWindowHeight();
    const shouldReduceMotion = useReducedMotion();
    const reduceMotion = Boolean(prefersReducedMotion || shouldReduceMotion);
    const animationOptions: AnimationOptions<number> = reduceMotion ? { type: 'tween', duration: 0.01 } : { type: 'spring', ...springConfig };

    const y = useMotionValue(0);

    const callbacks = useRef({ onCloseEnd, onCloseStart, onOpenEnd, onOpenStart });

    useIsomorphicLayoutEffect(() => {
      callbacks.current = { onCloseEnd, onCloseStart, onOpenEnd, onOpenStart };
    });

    if (snapPoints) {
      // Convert negative / percentage snap points to absolute values
      snapPoints = snapPoints.map(point => {
        // Percentage values e.g. between 0.0 and 1.0
        if (point > 0 && point <= 1) return Math.round(point * windowHeight);
        return point < 0 ? windowHeight + point : point; // negative values
      });

      console.assert(inDescendingOrder(snapPoints) || windowHeight === 0, `Snap points need to be in descending order got: [${snapPoints}]`);
    }

    const onDrag = useEvent((_, { delta }: PanInfo) => {
      const velocity = y.getVelocity();

      if (velocity > 0) indicatorRotation.set(10);
      if (velocity < 0) indicatorRotation.set(-10);

      y.set(Math.max(y.get() + delta.y, 0));
    });

    const onDragEnd = useEvent((_, { velocity }: PanInfo) => {
      if (velocity.y > DRAG_VELOCITY_THRESHOLD) {
        onClose();
      } else {
        const sheetEl = sheetRef.current as HTMLDivElement;
        const sheetHeight = sheetEl.getBoundingClientRect().height;
        const currentY = y.get();

        let snapTo = 0;

        if (snapPoints) {
          const snapToValues = snapPoints.map(p => sheetHeight - p).filter(p => p >= 0);

          if (detent === 'content-height' && !snapToValues.includes(0)) {
            snapToValues.unshift(0);
          }

          snapTo = getClosest(snapToValues, currentY);
        } else if (currentY / sheetHeight > DRAG_CLOSE_THRESHOLD) {
          snapTo = sheetHeight;
        }

        snapTo = validateSnapTo({ snapTo, sheetHeight });

        animate(y, snapTo, animationOptions);

        if (snapPoints && onSnap) {
          const snapValue = Math.abs(Math.round(snapPoints[0] - snapTo));
          const snapIndex = snapPoints.indexOf(getClosest(snapPoints, snapValue));
          onSnap(snapIndex);
        }

        if (snapTo >= sheetHeight) onClose();
      }

      indicatorRotation.set(0);
    });

    useEffect(() => {
      if (!snapPoints || !onSnap) return;
      const snapIndex = isOpen ? initialSnap : snapPoints.length - 1;
      onSnap(snapIndex);
    }, [isOpen]); // eslint-disable-line

    useImperativeHandle(ref, () => ({
      y,
      snapTo: (snapIndex: number) => {
        const sheetEl = sheetRef.current as HTMLDivElement | null;

        if (snapPoints && snapPoints[snapIndex] !== undefined && sheetEl !== null) {
          const sheetHeight = sheetEl.getBoundingClientRect().height;
          const snapPoint = snapPoints[snapIndex];
          const snapTo = validateSnapTo({
            snapTo: sheetHeight - snapPoint,
            sheetHeight
          });

          animate(y, snapTo, animationOptions);
          if (onSnap) onSnap(snapIndex);
          if (snapTo >= sheetHeight) onClose();
        }
      }
    }));

    useModalEffect(isOpen, rootId);

    useBlockScroll(!isOpen);

    const dragProps = useMemo(() => {
      const dragProps: SheetContextType['dragProps'] = {
        drag: 'y',
        dragElastic: 0,
        dragConstraints: { top: 0, bottom: 0 },
        dragMomentum: false,
        onDrag,
        onDragEnd
      };

      return disableDrag ? undefined : dragProps;
    }, [disableDrag]); // eslint-disable-line

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

    const sheet = (
      <SheetContext.Provider value={context}>
        <div {...rest} ref={ref} style={{ ...styles.wrapper, ...style }}>
          <AnimatePresence>
            {isOpen ? Children.map(children, (child: any, index) => cloneElement(child, { key: `sheet-child-${index}` })) : null}
          </AnimatePresence>
        </div>
      </SheetContext.Provider>
    );

    if (IS_SSR) return sheet;

    return createPortal(sheet, mountPoint ?? document.body);
  }
);
