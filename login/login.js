import { emailRegex, isPasswordValid } from "./validation.js";

const emailInput = document.getElementById("emailInput");
const emailHelper = document.getElementById("emailHelper");
const passwordInput = document.getElementById("passwordInput");
const passwordHelper = document.getElementById("passwordHelper");
const loginButton = document.getElementById("loginButton");

emailInput.addEventListener("input", function () {
  const email = this.value;

  if (emailRegex.test(email)) {
    emailHelper.textContent = "";
    loginButton.style.backgroundColor = "#7f6aee";
  } else {
    emailHelper.textContent = "*올바른 이메일 주소 형식을 입력해주세요. (예: example@example.com)";
    loginButton.style.backgroundColor = "#aca0eb";
  }
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
