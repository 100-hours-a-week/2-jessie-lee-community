export default class ComponentManager {
  constructor() {
    this.components = new Map();
  }

  /**
   * 컴포넌트 등록
   * @param {string} id - 컴포넌트 식별자
   * @param {Object} component - 컴포넌트 인스턴스
   * @returns {Object} - 등록된 컴포넌트 인스턴스
   */
  register(id, component) {
    this.components.set(id, component);
    return component;
  }

  /**
   * 컴포넌트 가져오기
   * @param {string} id - 컴포넌트 식별자
   * @returns {Object|undefined} - 컴포넌트 인스턴스 또는 undefined
   */
  get(id) {
    return this.components.get(id);
  }

  /**
   * 컴포넌트 제거
   * @param {string} id - 컴포넌트 식별자
   * @returns {boolean} - 제거 성공 여부
   */
  unregister(id) {
    return this.components.delete(id);
  }

  /**
   * 특정 컴포넌트 상태 업데이트
   * @param {string} id - 컴포넌트 식별자
   * @param {Object} newState - 새로운 상태 객체
   * @returns {boolean} - 업데이트 성공 여부
   */
  updateComponentState(id, newState) {
    const component = this.get(id);
    if (!component) return;

    if (typeof component.update === "function") {
      component.update(newState);
    }
  }
}
