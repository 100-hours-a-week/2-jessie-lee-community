import { useState } from "../../core/useState.js";

/** NavBar 컴포넌트 */
export default function NavBar(container, props = {}) {
  // 상태 관리 - createSignal을 사용하여 state와 setState 생성
  const [state, setState] = useState({
    userId: JSON.parse(localStorage.getItem("userId")) || null,
  });

  // 로그아웃 핸들러
  function handleLogout(e) {
    e.preventDefault();
    localStorage.removeItem("userId");
    setState({
      userId: null,
    });
    // 로그아웃 후 홈페이지로 이동
    window.location.href = "/";
  }

  // 이벤트 리스너 연결
  function setupEventListeners() {
    const logoutBtn = container.querySelector("#logoutBtn");
    if (logoutBtn) {
      logoutBtn.addEventListener("click", handleLogout);
    }
  }

  // 로그인 상태에 따라 다른 메뉴 아이템을 반환
  function getMenuItems() {
    const currentState = state();

    if (currentState.isLoggedIn) {
      return `
        <div class="navMenu">
          <a href="/" class="navMenuItem">게시판</a>
          <a href="/mypage" class="navMenuItem">마이페이지</a>
          <a href="#" class="navMenuItem" id="logoutBtn">로그아웃</a>
        </div>
        <div class="navUserInfo">
          <span>안녕하세요, ${currentState.user?.nickname || "사용자"}님</span>
        </div>
      `;
    } else {
      return `
        <div class="navMenu">
          <a href="/" class="navMenuItem">게시판</a>
          <a href="/login" class="navMenuItem">로그인</a>
          <a href="/signup" class="navMenuItem">회원가입</a>
        </div>
      `;
    }
  }

  // 렌더링 함수
  function render() {
    container.innerHTML = `
      <div class="navBarContainer">
        <div class="navLogo">
          <a href="/">Jessie's Community</a>
        </div>
        ${getMenuItems()}
      </div>
    `;
    setupEventListeners();
  }

  // 컴포넌트 업데이트 함수 (외부에서 호출 가능)
  function update(newState) {
    setState({
      ...state(),
      ...newState,
    });
    render();
  }

  // 초기 렌더링
  render();

  // 컴포넌트 인터페이스 반환 (외부에서 접근 가능한 메서드)
  return {
    update,
    getState: state,
  };
}
