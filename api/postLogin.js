import { BASE_URL } from "../config.js";

export async function postLogin(email, password) {
  try {
    const response = await fetch(BASE_URL + "/users/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });
    if (!response.ok) {
      const errorData = response.json();
      throw new Error(errorData.message || "로그인에 실패했습니다.");
    }

    const data = await response.json();
    return data;
  } catch (error) {
    alert("로그인 중 오류가 발생했습니다. 다시 시도해주세요.", error.message);
  }
}
