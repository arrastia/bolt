import { isDocumentElement } from 'ui/utils/CommonUtils';

export const getScrollTop = (element: Element): number => (isDocumentElement(element) ? window.pageYOffset : element.scrollTop);
