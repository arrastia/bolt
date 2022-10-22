export function addEvent<K extends keyof GlobalEventHandlersEventMap>(
  target: EventTarget,
  event: K,
  handler: (this: Document, ev: GlobalEventHandlersEventMap[K]) => any,
  options?: boolean | AddEventListenerOptions
) {
  target.addEventListener(event, handler as EventListenerOrEventListenerObject, options);

  return () => {
    target.removeEventListener(event, handler as EventListenerOrEventListenerObject, options);
  };
}
