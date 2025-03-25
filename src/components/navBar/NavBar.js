export default class NavBar {
  constructor(container, props = {}) {
    this.container = container;
    this.props = props;
    this.state = {
      isLoggedIn: localStorage.getItem("isLoggedIn") === "true",
      user: JSON.parse(localStorage.getItem("user")) || null,
    };
    this.render();
  }

  // setState 메서드 - React의 setState와 유사한 작동 방식
  setState(newState) {
    this.state = { ...this.state, ...newState };
    this.render();
  }

  // 로그인 상태에 따라 다른 메뉴 아이템을 반환
  getMenuItems() {
    if (this.state.isLoggedIn) {
      return `
          <div class="navMenu">
            <a href="/posts" class="navMenuItem">게시판</a>
            <a href="/mypage" class="navMenuItem">마이페이지</a>
            <a href="#" class="navMenuItem" id="logoutBtn">로그아웃</a>
          </div>
          <div class="navUserInfo">
            <span>안녕하세요, ${this.state.user?.nickname || "사용자"}님</span>
          </div>
        `;
    } else {
      return `
          <div class="navMenu">
            <a href="/posts" class="navMenuItem">게시판</a>
            <a href="/login" class="navMenuItem">로그인</a>
            <a href="/signup" class="navMenuItem">회원가입</a>
          </div>
        `;
    }
  }

  // 이벤트 리스너 연결
  attachEventListeners() {
    const logoutBtn = this.container.querySelector("#logoutBtn");
    if (logoutBtn) {
      logoutBtn.addEventListener("click", (e) => {
        e.preventDefault();
        this.logout();
      });
    }
  }

  // 로그아웃 처리
  logout() {
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("user");
    this.setState({ isLoggedIn: false, user: null });
    // 로그아웃 후 홈페이지로 이동
    window.location.href = "/";
  }

  // 컴포넌트 렌더링
  render() {
    this.container.innerHTML = `
        <div class="navBarContainer">
          <div class="navLogo">
            <a href="/">Jessie's Community</a>
          </div>
          ${this.getMenuItems()}
        </div>
      `;
    this.attachEventListeners();
  }
}
