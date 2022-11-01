import { isDocumentElement } from 'ui/utils/CommonUtils';

export function scrollTo(element: Element, top: number) {
  isDocumentElement(element) ? window.scrollTo(0, top) : (element.scrollTop = top);
}
