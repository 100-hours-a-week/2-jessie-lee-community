import { validateNickname } from "../../utils/validation.js";

export default function mypageScript() {
  const profileNicknameInput = document.getElementById("profileNicknameInput");
  const editButton = document.getElementById("editButton");
  const nicknameHelperText = document.getElementById("nicknameHelperText");
  const completeButton = document.getElementById("completeButton");

  editButton.addEventListener("click", function () {
    const nickname = profileNicknameInput.value;

    const { isValid, message } = validateNickname(nickname);
    nicknameHelperText.textContent = message;
    completeButton.disabled = !isValid;

    if (isValid) {
      completeButton.style.backgroundColor = "#7f6aee";
    } else {
      completeButton.style.backgroundColor = "#aca0eb";
    }
  });
}
