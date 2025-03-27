/**
 * 모든 UI 컴포넌트의 기본 클래스
 * 필수적인 메서드만 포함하는 최소화된 버전
 */
export default class Component {
  /**
   * 컴포넌트 생성자
   * @param {HTMLElement} container - 컴포넌트가 렌더링될 컨테이너 요소
   * @param {Object} props - 컴포넌트 초기 속성
   */
  constructor(container, props = {}) {
    this.container = container;
    this.props = { ...props };
    this.state = {};

    this.render();
  }

  /**
   * 컴포넌트 상태 업데이트
   * @param {Object} newState - 새로운 상태 객체
   */
  setState(newState) {
    this.state = { ...this.state, ...newState };
    this.render();
  }

  /**
   * 컴포넌트 렌더링 (자식 클래스에서 재정의)
   */
  render() {
    // 기본 구현은 빈 메서드
    // 자식 클래스에서 반드시 오버라이드해야 함
    console.warn("Component의 render 메서드가 구현되지 않았습니다");
  }

  /**
   * 이벤트 리스너 연결 (자식 클래스에서 재정의)
   */
  attachEventListeners() {}

  /**
   * 컴포넌트 정리 - 이벤트 리스너 제거 및 DOM에서 요소 제거
   */
  destroy() {
    // 컨테이너 내용 비우기
    this.container.innerHTML = "";
  }
}
