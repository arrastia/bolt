const OVERFLOW_REG_EXP = /(auto|scroll)/;

export function isScrollableStyle(style: CSSStyleDeclaration): boolean {
  const { overflow, overflowX, overflowY } = style;

  return OVERFLOW_REG_EXP.test(`${overflow}${overflowX}${overflowY}`);
}
