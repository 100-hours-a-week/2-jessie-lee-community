import { formatDate } from "../../utils/formatDate.js";
import { getPosts } from "../../api/getPosts.js";

document.addEventListener("DOMContentLoaded", () => {
  displayPosts();
});

async function displayPosts() {
  const posts = await getPosts();
  const postsContainer = document.getElementById("posts-container");

  posts.forEach((post) => {
    const postElement = createPostElement(post);
    postsContainer.appendChild(postElement);
  });
}

function createPostElement(post) {
  const postElement = document.createElement("a");
  postElement.className = "post";
  postElement.href = `../postdetail/post-detail.html?id=${post.id}`;

  postElement.innerHTML = `
        <div class="post-title">${post.title}</div>
        <div class="post-info">
            <span>좋아요 ${post.status.likes}</span>
            <span>댓글 ${post.status.comments}</span>
            <span>조회수 ${post.status.views}</span>
            <span class="date">${formatDate(post.date)}</span>
        </div>
        <div class="horizontal-divider"></div>
        <div class="author-text">${post.author}</div>
    `;

  return postElement;
}
