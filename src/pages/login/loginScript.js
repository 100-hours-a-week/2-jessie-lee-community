import { postLogin } from "../../../api/postLogin.js";
// import useState from "../../../js/useState.js";
import { validateEmail, validatePassword } from "../../../utils/validation.js";

export default function loginScript() {
  const emailInput = document.getElementById("emailInput");
  const emailHelper = document.getElementById("emailHelper");
  const passwordInput = document.getElementById("passwordInput");
  const passwordHelper = document.getElementById("passwordHelper");
  const loginButton = document.getElementById("loginButton");

  let isEmailValid = false;
  let isPasswordValid = false;
  // const [isEmailValid, setEmailValid] = useState(false);
  // const [isPasswordValid, setPasswordValid] = useState(false);

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
    // setEmailValid(isValid);
    isEmailValid = isValid;
    emailHelper.textContent = message;
    updateLoginButtonState();
  });

  passwordInput.addEventListener("input", function () {
    const password = this.value;
    const { isValid, message } = validatePassword(password);
    // setPasswordValid(isValid);
    isPasswordValid = isValid;
    passwordHelper.textContent = message;
    updateLoginButtonState();
  });

  loginButton.addEventListener("click", async function (e) {
    e.preventDefault();

    if (!isEmailValid || !isPasswordValid) return;

    await postLogin(emailInput.value, passwordInput.value);
  });
}
