import type { MotionValue } from 'framer-motion';

export type SheetRef = { snapTo: (index: number) => void; y: MotionValue<number> };

export { Sheet } from './Sheet';
export { SheetBackdrop } from './components/SheetBackdrop';
export { SheetContainer } from './components/SheetContainer';
export { SheetContent } from './components/SheetContent';
export { SheetHeader } from './components/SheetHeader';
