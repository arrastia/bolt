export function isArrayWithLength(value: unknown): boolean {
  return Array.isArray(value) && !!value.length;
}
