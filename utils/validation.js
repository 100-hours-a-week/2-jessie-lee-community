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

export function validateConfirmPassword(password, confirmPassword) {
  // 입력되었는지 체크
  if (confirmPassword.length <= 0)
    return { isValid: false, message: "*비밀번호 한번 더 입력해주세요." };

  // 비밀번호와 비밀번호 확인이 같은지 체크
  if (password !== confirmPassword) {
    return { isValid: false, message: "*비밀번호가 다릅니다." };
  }

  return { isValid: true, message: "" };
}

export function validateNickname(nickname) {
  if (nickname.length <= 0) return { isValid: false, message: "*닉네임을 입력해주세요." };
  // 길이 체크
  if (nickname.length >= 11) {
    return { isValid: false, message: "*닉네임은 최대 10자까지 작성 가능합니다." };
  }
  if (nickname.split("").includes(" ")) {
    return { isValid: false, message: "*띄어쓰기를 없애주세요." };
  }

  return { isValid: true, message: "" };
}
