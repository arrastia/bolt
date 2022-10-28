import { animate } from 'framer-motion';
import { useEvent } from './useEvent';

import { DRAG_CLOSE_THRESHOLD, DRAG_VELOCITY_THRESHOLD } from '../constants';

import { getClosest, validateSnapTo } from '../utils';

import type { AnimationOptions, MotionValue, PanInfo } from 'framer-motion';
import type { MutableRefObject } from 'react';

const detent = 'full-height';

interface useDragType {
  animationOptions: AnimationOptions<number>;
  indicatorRotation: MotionValue<number>;
  onClose: () => void;
  onSnap?: (index: number) => void;
  sheetRef: MutableRefObject<any>;
  snapPoints?: number[];
  y: MotionValue<number>;
}

export const useDrag = ({ animationOptions, indicatorRotation, onClose, sheetRef, snapPoints, y, onSnap }: useDragType) => {
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

        if (!snapToValues.includes(0)) {
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

  return { onDrag, onDragEnd };
};
