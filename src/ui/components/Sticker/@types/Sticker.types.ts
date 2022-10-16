import type { ReactNode } from 'react';

export interface StickerProps<T> {
  autoplay?: boolean;
  data: T;
  fallback?: ReactNode | null;
  loop?: boolean;
  onClick?: () => void;
  size?: number;
}

export interface StickerRef {
  pause: () => void;
  play: () => void;
  playSegments: (segments: [number, number], forceFlag: boolean) => void;
}
