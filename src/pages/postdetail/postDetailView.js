export default function postDetailView() {
  return `
    <div class="container">
      <div id="post-detail"></div>
      <div class="divider"></div>
      <div class="comment-input-container">
        <textarea type="textarea" id="comment-input" placeholder="댓글을 남겨주세요!"></textarea>
        <div class="divider"></div>
        <button class="comment-button">댓글 등록</button>
      </div>
      <div class="divider"></div>
      <div id="post-comments"></div>
    </div>`;
}
