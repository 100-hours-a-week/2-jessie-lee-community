import { BASE_URL } from "../config.js";

/**
 * @typedef {Object} Comment
 * @property {string} id - 댓글 고유 식별자
 * @property {string} content - 댓글 내용
 * @property {string} createdAt - 생성 일시
 * @property {string} updatedAt - 수정 일시
 * @property {number} userId - 작성자 식별자
 * @property {string} userNickname - 작성자 이름
 * @property {number} postId - 게시글 식별자
 */

/**
 * @typedef {Object} PostDetail
 * @property {string} id - 게시글 고유 식별자
 * @property {string} title - 게시글 제목
 * @property {string} content - 게시글 내용
 * @property {string} imageUrl - 이미지 URL
 * @property {string} createdAt - 생성 일시
 * @property {string} updatedAt - 수정 일시
 * @property {number} userId - 작성자 식별자
 * @property {string} userNickname - 작성자 이름
 * @property {Comment[]} comments - 댓글 목록
 */

export async function getPostDetail(postId) {
  try {
    const response = await fetch(BASE_URL + "/posts/" + postId, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.log("게시글을 불러오는 중 오류가 발생했습니다.");
  }
}
