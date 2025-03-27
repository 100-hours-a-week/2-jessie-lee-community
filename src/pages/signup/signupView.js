export default function signupView() {
  return `
    <div class="signupWrapper">
      <h3 class="signupTitleText">회원가입</h3>
      <div class="signupInputContainer">
        <p class="signupInputTitleText">이메일*</p>
        <input
          type="email"
          class="signupInput"
          id="signupEmailInput"
          placeholder="이메일을 입력하세요"
        />
        <span class="helperText" id="emailHelperText"></span>
      </div>
      <div class="signupInputContainer">
        <p class="signupInputTitleText">비밀번호*</p>
        <input
          type="password"
          class="signupInput"
          id="signupPasswordInput"
          placeholder="비밀번호를 입력하세요"
        />
        <span class="helperText" id="passwordHelperText"></span>
      </div>
      <div class="signupInputContainer">
        <p class="signupInputTitleText">비밀번호 확인*</p>
        <input
          type="password"
          class="signupInput"
          id="confirmPasswordInput"
          placeholder="비밀번호를 한번 더 입력하세요"
        />
        <span class="helperText" id="passwordConfirmHelperText"></span>
      </div>
      <div class="signupInputContainer">
        <p class="signupInputTitleText">닉네임*</p>
        <input
          type="text"
          class="signupInput"
          id="nicknameInput"
          placeholder="닉네임을 입력하세요"
        />
        <span class="helperText" id="nicknameHelperText"></span>
      </div>
      <button type="button" class="signupButton" id="signupButton">회원가입</button>
    </div>`;
}
