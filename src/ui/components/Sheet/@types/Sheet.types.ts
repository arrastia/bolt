import type { AnimationOptions, DragHandlers, MotionProps, MotionValue, useSpring } from 'framer-motion';
import type { ForwardRefExoticComponent, HTMLAttributes, ReactNode, RefAttributes } from 'react';

export type SheetEvents = {
  onOpenStart?: () => void;
  onOpenEnd?: () => void;
  onCloseStart?: () => void;
  onCloseEnd?: () => void;
  onSnap?: (index: number) => void;
};

export type SheetDetent = 'full-height' | 'content-height';

export type SheetProps = {
  isOpen: boolean;
  children: ReactNode;
  onClose: () => void;
  rootId?: string;
  mountPoint?: Element;
  snapPoints?: number[];
  detent?: SheetDetent;
  initialSnap?: number; // index of snap points array
  springConfig?: Parameters<typeof useSpring>[1];
  disableDrag?: boolean;
  prefersReducedMotion?: boolean;
} & SheetEvents &
  HTMLAttributes<HTMLDivElement>;

export type SheetContainerProps = Omit<MotionProps, 'initial' | 'animate' | 'exit' | 'onAnimationComplete'> & {
  children: ReactNode;
};

export type SheetDraggableProps = Omit<
  MotionProps,
  'drag' | 'dragElastic' | 'dragConstraints' | 'dragMomentum' | 'onDrag' | 'onDragStart' | 'onDragEnd'
> & {
  children?: ReactNode;
  disableDrag?: boolean;
};

export type SheetBackdropProps = Omit<MotionProps, 'initial' | 'animate' | 'exit'>;

export type SheetDragProps = {
  drag: 'y';
  dragElastic: number;
  dragConstraints: any;
  dragMomentum: boolean;
  onDrag: DragHandlers['onDrag'];
  onDragEnd: DragHandlers['onDragEnd'];
};

export type SheetContextType = {
  y: MotionValue<any>;
  sheetRef: React.MutableRefObject<any>;
  isOpen: boolean;
  snapPoints: SheetProps['snapPoints'];
  detent: SheetDetent;
  initialSnap: SheetProps['initialSnap'];
  indicatorRotation: MotionValue<number>;
  callbacks: React.MutableRefObject<SheetEvents>;
  dragProps?: SheetDragProps;
  windowHeight: number;
  animationOptions: AnimationOptions<number>;
  reduceMotion: boolean;
};

type ContainerComponent = ForwardRefExoticComponent<SheetContainerProps & RefAttributes<any>>;

type DraggableComponent = ForwardRefExoticComponent<SheetDraggableProps & RefAttributes<any>>;

type BackdropComponent = ForwardRefExoticComponent<SheetBackdropProps & RefAttributes<any>>;

type SheetComponent = ForwardRefExoticComponent<SheetProps & RefAttributes<any>>;

type SheetCompoundComponent = {
  Container: ContainerComponent;
  Header: DraggableComponent;
  Content: DraggableComponent;
  Backdrop: BackdropComponent;
};

export type SheetCompound = SheetComponent & SheetCompoundComponent;
