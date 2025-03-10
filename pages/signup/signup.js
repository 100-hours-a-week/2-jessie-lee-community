import { emailRegex, isPasswordValid } from "../../utils/loginValidation.js";
import { HELPER_TEXT } from "./HELPER_TEXT.js";

const signupEmailInput = document.getElementById("signupEmailInput");
const emailHelperText = document.getElementById("emailHelperText");
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
