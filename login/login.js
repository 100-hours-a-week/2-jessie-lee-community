const emailInput = document.getElementById("emailInput");
const emailHelper = document.getElementById("emailHelper");
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
