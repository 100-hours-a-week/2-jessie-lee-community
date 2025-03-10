import { emailRegex, isPasswordValid } from "../../utils/loginValidation.js";
import { HELPER_TEXT } from "./HELPER_TEXT.js";

const signupEmailInput = document.getElementById("signupEmailInput");
const emailHelperText = document.getElementById("emailHelperText");
const signupPasswordInput = document.getElementById("signupPasswordInput");
const passwordHelperText = document.getElementById("passwordHelperText");
const confirmPasswordInput = document.getElementById("confirmPasswordInput");
const passwordConfirmHelperText = document.getElementById("passwordConfirmHelperText");
const signupButton = document.getElementById("signupButton");

let userPassword = "";

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
    userPassword = this.value;
    signupButton.style.backgroundColor = "#7f6aee";
  }
});

confirmPasswordInput.addEventListener("focusout", function () {
  const password = this.value;

  if (password.trim().length <= 0) {
    passwordConfirmHelperText.textContent = HELPER_TEXT.noConfirmPassword;
    signupButton.style.backgroundColor = "#aca0eb";
  } else if (userPassword !== password) {
    passwordConfirmHelperText.textContent = HELPER_TEXT.unmatchPassword;
    signupButton.style.backgroundColor = "#aca0eb";
  } else {
    passwordConfirmHelperText.textContent = "";
    signupButton.style.backgroundColor = "#7f6aee";
  }
});
