// Returns the HTML for the login page
export default function loginView() {
  return `
    <div class="loginWrapper">
      <h3 class="loginTitleText">로그인</h3>
      <form class="loginForm">
        <div class="inputWrapper">
          <p class="inputTitleText">이메일</p>
          <input type="email" id="emailInput" placeholder="이메일을 입력하세요" />
          <p class="helperText" id="emailHelper"></p>
        </div>
        <div class="inputWrapper">
          <p class="inputTitleText">비밀번호</p>
          <input type="password" id="passwordInput" placeholder="비밀번호를 입력하세요" />
          <p class="helperText" id="passwordHelper"></p>
        </div>
        <!-- TODO: 로그인 기능 구현 -->
        <button class="loginButton" id="loginButton"> 로그인 </button>
      </form>
      <a href="/signup" class="signupButton">회원가입</a>
    </div>
  `;
}
