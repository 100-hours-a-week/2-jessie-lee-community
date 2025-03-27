import { getPostDetail } from "../../../api/getPostDetail.js";
import { formatDate } from "../../../utils/formatDate.js";

/**
 * Post 타입을 import합니다.
 * @typedef {import('../../api/getPostDetail.js').PostDetail} PostDetail
 */

export default function postDetailScript() {
  loadPostDetail();
}

async function loadPostDetail() {
  // URL 파라미터에서 id 가져오기
  const path = window.location.pathname;
  const match = path.match(/\/post-detail\/(\d+)/);
  const postId = match ? match[1] : null;

  if (!postId) {
    showError("게시글 ID가 유효하지 않습니다.");
    return;
  }

  /** @type {PostDetail} */
  const post = await getPostDetail(postId);
  if (post) {
    displayPostDetail(post);
  }
}

function displayPostDetail(/** @param {PostDetail} post */ post) {
  const postDetailContainer = document.getElementById("post-detail");
  const postCommentsContainer = document.getElementById("post-comments");

  postDetailContainer.innerHTML = `
      <article class="post-detail">
          <h1 class="post-detail-title">${post.title}</h1>
          <div class="post-detail-info">
            <div class="post-detail-info-text">
              <span class="author">${post.userNickname}</span>
              <span class="date">${formatDate(post.createdAt)}</span>
            </div>
            <div class="post-detail-actions">
              <button class="edit btn">수정</button>
              <button class="delete btn">삭제</button>
            </div>
          </div>
          <div class="divider"></div>
          <div class="post-detail-content">
              ${post.content}
          </div>
          <div class="post-detail-stats">
              <button class="post-detail-button">${post.likeCount}</br>좋아요수</button>
              <button class="post-detail-button">${post.commentCount}</br>댓글</button>
          </div>
      </article>
  `;

  postCommentsContainer.innerHTML = `
    <div class="comments-section">
      ${post.comments
        .map(
          (comment) => `
        <div class="comment">
          <div class="comment-info">
            <div class="comment-author">
              <div class="comment-name">${comment.userNickname}</div>
              <div class="comment-date">${formatDate(comment.createdAt)}</div>
            </div>
            <div class="comment-text">${comment.content}</div>
          </div>
          <div class="post-detail-actions">
              <button class="edit btn">수정</button>
              <button class="delete btn">삭제</button>
            </div>
        </div>
      `
        )
        .join("")}
    </div>
  `;
}
