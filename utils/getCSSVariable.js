/** CSS 변수 값 가져오기 */
export function getCSSVariable(variableName) {
  return getComputedStyle(document.documentElement).getPropertyValue(variableName).trim();
}
