import Component from "../Component.js";

export default class NavBar extends Component {
  constructor(container, props = {}) {
    super(container, props);

    // 상태 초기화
    this.state = {
      userId: JSON.parse(localStorage.getItem("userId")) || null,
      ...this.state,
    };
  }

  // 로그인 상태에 따라 다른 메뉴 아이템을 반환
  getMenuItems() {
    if (this.state.isLoggedIn) {
      return `
        <div class="navMenu">
          <a href="/" class="navMenuItem">게시판</a>
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
          <a href="/" class="navMenuItem">게시판</a>
          <a href="/login" class="navMenuItem">로그인</a>
          <a href="/signup" class="navMenuItem">회원가입</a>
        </div>
      `;
    }
  }

  // 이벤트 리스너 연결 메서드 오버라이드
  attachEventListeners() {
    const logoutBtn = this.container.querySelector("#logoutBtn");
    if (logoutBtn) {
      logoutBtn.addEventListener("click", this.handleLogout.bind(this));
    }
  }

  // 이벤트 리스너 제거 메서드 오버라이드
  removeEventListeners() {
    const logoutBtn = this.container.querySelector("#logoutBtn");
    if (logoutBtn) {
      logoutBtn.removeEventListener("click", this.handleLogout.bind(this));
    }
  }

  // 로그아웃 처리 핸들러
  handleLogout(e) {
    e.preventDefault();

    // 로컬 스토리지에서 사용자 정보 제거
    localStorage.removeItem("userId");

    // 컴포넌트 상태 업데이트
    this.setState({
      isLoggedIn: false,
      userId: null,
    });

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
