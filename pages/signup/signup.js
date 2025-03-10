import { emailRegex, isPasswordValid } from "../../utils/loginValidation.js";
import { HELPER_TEXT } from "./HELPER_TEXT.js";

const signupEmailInput = document.getElementById("signupEmailInput");
const emailHelperText = document.getElementById("emailHelperText");
const signupPasswordInput = document.getElementById("signupPasswordInput");
const passwordHelperText = document.getElementById("passwordHelperText");
const signupButton = document.getElementById("signupButton");

signupEmailInput.addEventListener("focusout", function () {
  const email = this.value;

  if (emailRegex.test(email)) {
    emailHelperText.textContent = "";
    signupButton.style.backgroundColor = "#7f6aee";
  } else if (email.trim().length <= 0) {
    emailHelperText.textContent = HELPER_TEXT.noEmail;
    signupButton.style.backgroundColor = "#aca0eb";
  } else {
    emailHelperText.textContent = HELPER_TEXT.unvalidEmail;
    signupButton.style.backgroundColor = "#aca0eb";
  }
});

signupPasswordInput.addEventListener("focusout", function () {
  const password = this.value;

  if (password.trim().length <= 0) {
    passwordHelperText.textContent = HELPER_TEXT.noPassword;
    signupButton.style.backgroundColor = "#aca0eb";
  } else if (!isPasswordValid(password)) {
    passwordHelperText.textContent = HELPER_TEXT.unvalidPassword;
    signupButton.style.backgroundColor = "#aca0eb";
  } else {
    passwordHelperText.textContent = "";
    signupButton.style.backgroundColor = "#7f6aee";
  }
});
