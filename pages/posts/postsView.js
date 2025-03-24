export default function postsView() {
  return `
    <div class="posts-wrapper">
      <p>안녕하세요,<br />Jessie's Community <span>게시판</span>입니다.</p>
      <button class="new-post-button">게시글 작성</button>
      <div id="posts-container"></div>
      <script type="module" src="posts.js"></script>
    </div>
    `;
}
