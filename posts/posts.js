document.addEventListener("DOMContentLoaded", () => {
  loadPosts();
});

async function loadPosts() {
  try {
    const response = await fetch("posts.json");
    const data = await response.json();
    displayPosts(data.posts);
  } catch (error) {
    console.error("게시글을 불러오는 중 오류가 발생했습니다:", error);
  }
}

function displayPosts(posts) {
  const postsContainer = document.getElementById("posts-container");

  posts.forEach((post) => {
    const postElement = createPostElement(post);
    postsContainer.appendChild(postElement);
  });
}

function createPostElement(post) {
  const postElement = document.createElement("div");
  postElement.className = "post";

  postElement.innerHTML = `
        <div class="post-title">${post.title}</div>
        <div class="post-info">
            <span>좋아요 ${post.likes}</span>
            <span>댓글 ${post.comments}</span>
            <span>조회수 ${post.views}</span>
            <span class="date">${formatDate(post.date)}</span>
        </div>
        <div class="horizontal-divider"></div>
        <div class="author-text">${post.author}</div>
    `;

  return postElement;
}

function formatDate(dateString) {
  const date = new Date(dateString.replace(" ", "T")); // 문자열을 Date 객체로 변환

  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  const seconds = String(date.getSeconds()).padStart(2, "0");

  return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
}
