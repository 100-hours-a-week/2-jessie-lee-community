import { formatDate } from "../../../utils/formatDate.js";
import { getPosts } from "../../../api/getPosts.js";

/**
 * Post 타입을 import합니다.
 * @typedef {import('../../api/getPosts.js').Post} Post
 */

export default function postsScript() {
  const newPostButton = document.getElementById("new-post-button");
  newPostButton.addEventListener("click", () => {
    location.href = "/createPost";
  });
  displayPosts();
}

async function displayPosts() {
  /** @type {Post[]} */
  const posts = await getPosts();
  const postsContainer = document.getElementById("posts-container");

  posts.forEach((/** @param {Post} post */ post) => {
    const postElement = createPostElement(post);
    postsContainer.appendChild(postElement);
  });
}

function createPostElement(/** @param {Post} post */ post) {
  const postElement = document.createElement("a");
  postElement.className = "post";
  postElement.href = `/post-detail/${post.id}`;

  postElement.innerHTML = `
          <div class="post-title">${post.title}</div>
          <div class="post-info">
              <span>좋아요 ${post.likeCount}</span>
              <span>댓글 ${post.commentCount}</span>
              <span class="date">업로드 ${formatDate(post.createdAt)}</span>
          </div>
          <div class="horizontal-divider"></div>
          <div class="author-text">${post.userNickname}</div>
      `;

  return postElement;
}
