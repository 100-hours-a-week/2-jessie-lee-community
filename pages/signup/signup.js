import { validateEmail, validatePassword } from "../../utils/loginValidation.js";
import { isNicknameValid } from "../../utils/nicknameValidation.js";
import { HELPER_TEXT } from "./HELPER_TEXT.js";

const signupEmailInput = document.getElementById("signupEmailInput");
const emailHelperText = document.getElementById("emailHelperText");
const signupPasswordInput = document.getElementById("signupPasswordInput");
const passwordHelperText = document.getElementById("passwordHelperText");
const confirmPasswordInput = document.getElementById("confirmPasswordInput");
const passwordConfirmHelperText = document.getElementById("passwordConfirmHelperText");
const nicknameInput = document.getElementById("nicknameInput");
const nicknameHelperText = document.getElementById("nicknameHelperText");
const signupButton = document.getElementById("signupButton");

let userPassword = "";
let isEmailValid = false;
let isPasswordValid = false;
let isPasswordConfirmValid = false;
let isNicknameValid = false;

// 버튼 초기 상태를 disabled로 설정
signupButton.disabled = true;
signupButton.style.backgroundColor = "#aca0eb";

// 모든 validation이 통과되었는지 확인하고 버튼 상태 업데이트
function updateSignupButtonState() {
  if (isEmailValid && isPasswordValid && isPasswordConfirmValid && isNicknameValid) {
    signupButton.disabled = false;
    signupButton.style.backgroundColor = "#7f6aee";
  } else {
    signupButton.disabled = true;
    signupButton.style.backgroundColor = "#aca0eb";
  }
}

signupEmailInput.addEventListener("focusout", function () {
  const email = this.value;

  const { isValid, message } = validateEmail(email);

  isEmailValid = isValid;
  emailHelperText.textContent = message;

  updateSignupButtonState();
});

signupPasswordInput.addEventListener("focusout", function () {
  const password = this.value;

  const { isValid, message } = validatePassword(password);
  isPasswordValid = isValid;
  passwordHelperText.textContent = message;

  if (isValid) {
    userPassword = this.value;

    if (confirmPasswordInput.value) {
      const confirmPass = confirmPasswordInput.value;
      isPasswordConfirmValid = userPassword === confirmPass;
      passwordConfirmHelperText.textContent = isPasswordConfirmValid
        ? ""
        : HELPER_TEXT.unmatchPassword;
    }
  }

  updateSignupButtonState();
});

confirmPasswordInput.addEventListener("focusout", function () {
  const password = this.value;

  if (password.trim().length <= 0) {
    passwordConfirmHelperText.textContent = HELPER_TEXT.noConfirmPassword;
    isPasswordConfirmValid = false;
  } else if (userPassword !== password) {
    passwordConfirmHelperText.textContent = HELPER_TEXT.unmatchPassword;
    isPasswordConfirmValid = false;
  } else {
    passwordConfirmHelperText.textContent = "";
    isPasswordConfirmValid = true;
  }

  updateSignupButtonState();
});

nicknameInput.addEventListener("focusout", function () {
  const nickname = this.value;

  const { isValid, message } = isNicknameValid(nickname);
  isNicknameValid = isValid;
  nicknameHelperText.textContent = message;

  updateSignupButtonState();
});
