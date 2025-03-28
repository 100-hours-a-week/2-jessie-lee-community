/**
 * React의 useState와 유사한 상태 관리 훅
 * @param {any} initialValue - 초기 상태 값
 * @returns {Array} - [state, setState] 배열 (state는 함수, setState는 상태 업데이트 함수)
 */
export function useState(initialValue) {
  let value = initialValue;

  // 값을 읽는 함수
  const getter = () => value;

  // 값을 업데이트하는 함수
  const setter = (newValue) => {
    value = newValue;
    return value;
  };

  return [getter, setter];
}
