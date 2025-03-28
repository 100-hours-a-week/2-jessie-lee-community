export default function postsView() {
  return `
    <div class="posts-wrapper">
      <button class="new-post-button" id="new-post-button">+</button>
      <div id="posts-container"></div>
      <script type="module" src="posts.js"></script>
    </div>
    `;
}
