export default function createPostView() {
  return `
      <div class="create-post-wrapper">
        <h1 class="create-post-title">게시글 작성</h1>
        <div class="create-post-form">
          <div class="form-group">
            <label for="post-title" class="input-label">제목</label>
            <input 
              type="text" 
              id="post-title" 
              class="post-title-input" 
              placeholder="제목을 입력하세요" 
            />
            <p class="helperText" id="title-helper"></p>
          </div>
          
          <div class="form-group">
            <label for="post-content" class="input-label">내용</label>
            <textarea 
              id="post-content" 
              class="post-content-input" 
              placeholder="내용을 입력하세요"
            ></textarea>
            <p class="helperText" id="content-helper"></p>
          </div>
          
          <div class="form-actions">
            <button type="button" class="cancel-button" id="cancel-button">취소</button>
            <button type="button" class="submit-button" id="submit-button">게시하기</button>
          </div>
        </div>
      </div>
    `;
}
