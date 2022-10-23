import { testPlatform } from './testPlatform';

export const isAppleDevice = () => isMac() || isIOS();

export const isIOS = () => isIPhone() || isIPad();

export const isIPad = () => testPlatform(/^iPad/i) || (isMac() && navigator.maxTouchPoints > 1);

export const isIPhone = () => testPlatform(/^iPhone/i);

export const isMac = () => testPlatform(/^Mac/i);
