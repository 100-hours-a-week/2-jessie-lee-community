import { postUser } from "../../api/postUser.js";
import {
  validateEmail,
  validatePassword,
  validateConfirmPassword,
  validateNickname,
} from "../../utils/validation.js";

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
let userEmail = "";
let userNickname = "";

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

  userEmail = isValid && email;
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
      const { isValid, message } = validateConfirmPassword(userPassword, confirmPass);

      userPassword = isValid && password;
      isPasswordConfirmValid = isValid;
      passwordConfirmHelperText.textContent = message;
    }
  }

  updateSignupButtonState();
});

confirmPasswordInput.addEventListener("focusout", function () {
  const password = this.value;

  const { isValid, message } = validateConfirmPassword(userPassword, password);

  isPasswordConfirmValid = isValid;
  passwordConfirmHelperText.textContent = message;

  updateSignupButtonState();
});

nicknameInput.addEventListener("focusout", function () {
  const nickname = this.value;

  const { isValid, message } = validateNickname(nickname);

  userNickname = isValid && nickname;
  isNicknameValid = isValid;
  nicknameHelperText.textContent = message;

  updateSignupButtonState();
});

signupButton.addEventListener("click", async function () {
  const res = await postUser(userEmail, userPassword, userNickname);
  console.log(res);
});
