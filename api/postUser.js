import { BASE_URL } from "../config.js";

/**
 * 회워가입
 * @returns {Promise<Post[]>}
 * @throws {Error} 실패한 경우
 */
export async function postUser(email, password, nickname) {
  try {
    const response = await fetch(BASE_URL + "/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email,
        password: password,
        nickname: nickname,
      }),
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("회원가입 중 오류가 발생했습니다:", error);
  }
}
