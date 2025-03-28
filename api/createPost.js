import { BASE_URL } from "../config.js";

/** 게시글 업로드 */
export async function createPost({ title, content }) {
  try {
    const userId = JSON.parse(localStorage.getItem("userId"));

    const response = await fetch(BASE_URL + "/posts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title,
        content,
        userId,
      }),
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("게시글을 업로드하는 중 오류가 발생했습니다:", error);
  }
}
