import { getPostById } from "../../api/getPostById.js";
import { formatDate } from "../../utils/formatDate.js";

document.addEventListener("DOMContentLoaded", () => {
  loadPostDetail();
});

async function loadPostDetail() {
  // URL 파라미터에서 id 가져오기
  const urlParams = new URLSearchParams(window.location.search);
  const postId = urlParams.get("id");

  if (!postId) {
    showError("게시글 ID가 유효하지 않습니다.");
    return;
  }

  const post = await getPostById(postId);
  if (post) {
    displayPostDetail(post);
  }
}

function displayPostDetail(post) {
  const postDetailContainer = document.getElementById("post-detail");
  const postCommentsContainer = document.getElementById("post-comments");

  postDetailContainer.innerHTML = `
      <article class="post-detail">
          <h1 class="post-detail-title">${post.title}</h1>
          <div class="post-detail-info">
            <div class="post-detail-info-text">
              <span class="author">${post.author}</span>
              <span class="date">${formatDate(post.date)}</span>
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
              <button class="post-detail-button">${post.status.likes}</br>좋아요수</button>
              <button class="post-detail-button">${post.status.views}</br>조회수</button>
              <button class="post-detail-button">${post.status.comments}</br>댓글</button>
          </div>
      </article>
  `;

  // TODO : 댓글 목록 표시
  postCommentsContainer.innerHTML = `
    <div class="comments-section">
      ${post.comments
        .map(
          (comment) => `
        <div class="comment">
          <div class="comment-info">
            <div class="comment-author">
              <div class="comment-name">${comment.author}</div>
              <div class="comment-date">${formatDate(comment.date)}</div>
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
