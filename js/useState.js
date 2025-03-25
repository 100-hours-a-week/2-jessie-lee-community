let currentStateKey = 0; // useState가 실행 된 횟수
const states = []; // state를 보관할 배열

export default function useState(initState) {
  // initState로 초기값 설정
  if (states.length === currentStateKey) {
    states.push(initState);
  }

  // state 할당
  const state = states[currentStateKey];
  const setState = (newState) => {
    // state를 직접 수정하는 것이 아닌, states 내부의 값을 수정
    states[currentStateKey] = newState;
    render();
  };
  currentStateKey += 1;

  return [state, setState];
}
