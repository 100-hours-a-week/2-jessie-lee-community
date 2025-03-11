import { validateEmail, isPasswordValid } from "../../utils/loginValidation.js";

const emailInput = document.getElementById("emailInput");
const emailHelper = document.getElementById("emailHelper");
const passwordInput = document.getElementById("passwordInput");
const passwordHelper = document.getElementById("passwordHelper");
const loginButton = document.getElementById("loginButton");

let isEmailValid = false;
let isPasswordValid = false;

// 버튼 초기 상태를 disabled로 설정
loginButton.disabled = true;
loginButton.style.backgroundColor = "#aca0eb";

// 모든 validation이 통과되었는지 확인하고 버튼 상태 업데이트
function updateLoginButtonState() {
  if (isEmailValid && isPasswordValid) {
    loginButton.disabled = false;
    loginButton.style.backgroundColor = "#7f6aee";
  } else {
    loginButton.disabled = true;
    loginButton.style.backgroundColor = "#aca0eb";
  }
}

emailInput.addEventListener("input", function () {
  const email = this.value;

  const { isValid, message } = validateEmail(email);
  isEmailValid = isValid;
  emailHelper.textContent = message;

  updateLoginButtonState();
});

passwordInput.addEventListener("input", function () {
  const password = this.value;

  if (password === "") {
    passwordHelper.textContent = "*비밀번호를 입력해주세요.";
    loginButton.style.backgroundColor = "#aca0eb";
  } else if (!isPasswordValid(password)) {
    passwordHelper.textContent =
      "*비밀번호는 8자 이상, 20자 이하이며 대문자, 소문자, 숫자, 특수문자를 각각 최소 1개 포함해야 합니다.";
    loginButton.style.backgroundColor = "#aca0eb";
  } else {
    passwordHelper.textContent = "";
    loginButton.style.backgroundColor = "#7f6aee";
  }
});
