export default class ComponentManager {
  constructor() {
    this.components = new Map();
    this.eventBus = new EventBus();
  }

  // 컴포넌트 등록
  register(id, component) {
    this.components.set(id, component);
    return component;
  }

  // 컴포넌트 가져오기
  get(id) {
    return this.components.get(id);
  }

  // 전역 상태 변경 시 모든 관련 컴포넌트 업데이트
  updateState(stateChanges) {
    this.eventBus.emit("stateChange", stateChanges);
  }
}

// 간단한 이벤트 버스 구현
class EventBus {
  constructor() {
    this.events = {};
  }

  // 이벤트 구독
  on(event, callback) {
    if (!this.events[event]) {
      this.events[event] = [];
    }
    this.events[event].push(callback);
    return () => this.off(event, callback);
  }

  // 이벤트 구독 취소
  off(event, callback) {
    if (!this.events[event]) return;
    this.events[event] = this.events[event].filter((cb) => cb !== callback);
  }

  // 이벤트 발행
  emit(event, data) {
    if (!this.events[event]) return;
    this.events[event].forEach((callback) => callback(data));
  }
}
