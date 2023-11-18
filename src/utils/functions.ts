/**
 *
 * @param {string} text - Input text to be sliced
 * @param {number} [max = 50] - The maximum length before slicing
 * @returns - The sliced text with an ellipsis {...} appended if truncated
 */

export function textSlicer(text: string, max: number = 50) {
  if (text.length > 50) return `${text.slice(0, max)}...`;

  return text;
}
