export const DEFAULT_SPRING_CONFIG = { damping: 30, mass: 0.2, stiffness: 300 };

export const DRAG_CLOSE_THRESHOLD = 0.6;

export const DRAG_VELOCITY_THRESHOLD = 500;

export const IS_SSR = typeof window === 'undefined';

export const MAX_HEIGHT = 'calc(100% - env(safe-area-inset-top) - 34px)';
