export default function passwordEditView() {
  return `
    <div class="passwordEditWrapper">
      <h3 class="mypageTitleText">비밀번호 수정</h3>
      <div class="inputContainer">
        <p class="inputTitleText">비밀번호</p>
        <input type="text" class="passwordInput" />
        <span class="helperText" id="password"></span>
      </div>
      <div class="inputContainer">
        <p class="inputTitleText">비밀번호 확인</p>
        <input type="text" class="passwordInput" />
        <span class="helperText" id="passwordConfirm"></span>
      </div>
      <a class="confirmButton" href="">수정하기</a>
    </div>`;
}
