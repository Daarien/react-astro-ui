export const BASIC_PADDING = 2;

export function getIconPadding(size, inverted) {
  if (!inverted) {
    return 0;
  }

  if (size < 20) {
    return BASIC_PADDING;
  }

  if (size >= 20 && size <= 40) {
    return BASIC_PADDING * 2;
  }

  return BASIC_PADDING * 3;
}
