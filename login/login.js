const emailInput = document.getElementById("emailInput");
const emailHelper = document.getElementById("emailHelper");
const passwordInput = document.getElementById("passwordInput");
const passwordHelper = document.getElementById("passwordHelper");
const loginButton = document.getElementById("loginButton");

// 이메일 유효성 검사를 위한 정규표현식
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

emailInput.addEventListener("input", function () {
  const email = this.value;

  if (emailRegex.test(email)) {
    emailHelper.textContent = "";
    loginButton.style.backgroundColor = "#7f6aee";
  } else {
    emailHelper.textContent =
      "*올바른 이메일 주소 형식을 입력해주세요. (예: example@example.com)";
    loginButton.style.backgroundColor = "#aca0eb";
  }
});

function isPasswordValid(password) {
  // 길이 체크
  if (password.length < 8 || password.length > 20) {
    return false;
  }

  // 각 조건을 체크
  const hasLowerCase = /[a-z]/.test(password);
  const hasUpperCase = /[A-Z]/.test(password);
  const hasNumber = /\d/.test(password);
  const hasSpecialChar = /[@$!%*?&]/.test(password);

  // 모든 조건이 충족되어야 true 반환
  return hasLowerCase && hasUpperCase && hasNumber && hasSpecialChar;
}

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
