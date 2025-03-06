import { formatDate } from "../../utils/formatDate.js";

document.addEventListener("DOMContentLoaded", () => {
  loadPostDetail();
});

async function loadPostDetail() {
  try {
    // URL 파라미터에서 id 가져오기
    const urlParams = new URLSearchParams(window.location.search);
    const postId = urlParams.get("id");

    if (!postId) {
      showError("게시글 ID가 유효하지 않습니다.");
      return;
    }

    // 게시글 데이터 불러오기
    const response = await fetch("../../data/posts.json");
    const data = await response.json();

    // ID에 해당하는 게시글 찾기
    const post = data.posts.find((p) => p.id.toString() === postId);

    if (post) {
      displayPostDetail(post);
    } else {
      console.log("게시글을 찾을 수 없습니다.");
    }
  } catch (error) {
    console.log("게시글을 불러오는 중 오류가 발생했습니다.");
  }
}

function displayPostDetail(post) {
  const postDetailContainer = document.getElementById("post-detail");

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
}
