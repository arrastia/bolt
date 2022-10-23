export const testPlatform = (expression: RegExp) => (typeof window !== 'undefined' ? expression.test(window.navigator.platform) : false);
