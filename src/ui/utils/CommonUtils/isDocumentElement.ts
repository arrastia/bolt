export function isDocumentElement(element: Element | Window): boolean {
  return element === document.body || element === document.documentElement || element === window;
}
