import loadCSS from "./loadCSS.js";

/**
 * 컴포넌트를 비동기적으로 불러오고 초기화하는 유틸리티 함수
 *
 * @param {Class} ComponentClass - 컴포넌트 클래스
 * @param {HTMLElement} container - 컴포넌트가 렌더링될 컨테이너 요소
 * @param {Object} props - 컴포넌트에 전달할 속성
 * @param {string} cssPath - 컴포넌트 CSS 파일 경로 (선택적)
 * @returns {Object} - 초기화된 컴포넌트 인스턴스
 */
export async function loadComponent(ComponentClass, container, props = {}, cssPath = null) {
  try {
    // CSS 파일이 있으면 로드
    if (cssPath) {
      loadCSS(cssPath);
    }
    // 컴포넌트 초기화 및 반환
    return new ComponentClass(container, props);
  } catch (error) {
    console.error(`컴포넌트 로드 중 오류 발생: ${ComponentClass}`, error);
    container.innerHTML = `<div class="error">컴포넌트 로드 중 오류가 발생했습니다.</div>`;
    return null;
  }
}
