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

export function validatePassword(password) {
  // 입력되었는지 체크
  if (password.length <= 0) return { isValid: false, message: "*비밀번호를 입력해주세요." };

  // 각 조건을 체크
  const hasLowerCase = /[a-z]/.test(password);
  const hasUpperCase = /[A-Z]/.test(password);
  const hasNumber = /\d/.test(password);
  const hasSpecialChar = /[@$!%*?&]/.test(password);

  if (
    password.length < 8 ||
    password.length > 20 ||
    !hasLowerCase ||
    !hasUpperCase ||
    !hasNumber ||
    !hasSpecialChar
  ) {
    return {
      isValid: false,
      message:
        "*비밀번호는 8자 이상, 20자 이하이며, 대문자, 소문자, 숫자, 특수문자를 각각 최소 1개 포함해야 합니다.",
    };
  }

  return { isValid: true, message: "" };
}
