const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function validateEmail(email) {
  if (email.length <= 0) return { isValid: false, message: "*이메일을 입력해주세요." };

  if (!emailRegex.test(email)) {
    return {
      isValid: false,
      message: "*올바른 이메일 주소 형식을 입력해주세요. (예: example@example.com)",
    };
  }

  return { isValid: true, message: "" };
}

export function isPasswordValid(password) {
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
