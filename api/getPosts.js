/**
 * @typedef {Object} Post
 * @property {string} id - 게시글 고유 식별자
 * @property {string} title - 게시글 제목
 * @property {string} createdAt - 생성 일시
 * @property {number} likeCount - 좋아요 수
 * @property {number} viewCount - 조회 수
 * @property {number} commentCount - 댓글 수
 * @property {string} userNickname - 작성자 이름
 */

/**
 * @typedef {Object} PostsResponse
 * @property {Post[]} posts - 게시글 목록
 */

/**
 * 모든 게시글을 가져오기
 * @returns {Promise<Post[]>}
 * @throws {Error} 실패한 경우
 */
export async function getPosts() {
  try {
    const response = await fetch("http://localhost:8080/posts");
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("게시글을 불러오는 중 오류가 발생했습니다:", error);
  }
}
