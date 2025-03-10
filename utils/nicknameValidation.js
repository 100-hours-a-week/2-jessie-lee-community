export function isNicknameValid(nickname) {
  if (nickname.length <= 0) return { isValid: false, message: "*닉네임을 입력해주세요." };
  // 길이 체크
  if (nickname.length >= 11) {
    return { isValid: false, message: "*닉네임은 최대 10자까지 작성 가능합니다." };
  }
  if (nickname.split("").includes(" ")) {
    return { isValid: false, message: "*띄어쓰기를 없애주세요." };
  }

  return { isValid: true, message: "수정 완료" };
}
