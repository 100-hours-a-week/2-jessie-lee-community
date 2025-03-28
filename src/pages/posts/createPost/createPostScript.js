import { getCSSVariable } from "../../../../utils/getCSSVariable.js";
import { createPost } from "../../../../api/createPost.js";
import { validatePostContent, validatePostTitle } from "../../../../utils/validation.js";

/**
 * @typedef {Object} PostData
 * @property {string} title - 게시글 제목
 * @property {string} content - 게시글 내용
 * @property {File|null} imageFile - 첨부 이미지 파일 (선택사항)
 */
export default function createPostScript() {
  const titleInput = document.getElementById("post-title");
  const contentInput = document.getElementById("post-content");
  const titleHelper = document.getElementById("title-helper");
  const contentHelper = document.getElementById("content-helper");
  const submitButton = document.getElementById("submit-button");
  const cancelButton = document.getElementById("cancel-button");

  let isTitleValid = false;
  let isContentValid = false;

  // 제출 버튼 상태 업데이트
  function updateSubmitButtonState() {
    if (isTitleValid && isContentValid) {
      submitButton.disabled = false;
      submitButton.style.backgroundColor = getCSSVariable("--primary-color");
    } else {
      submitButton.disabled = true;
      submitButton.style.backgroundColor = getCSSVariable("--primary-color-disabled");
    }
  }

  // 초기 버튼 상태 설정
  submitButton.disabled = true;
  submitButton.style.backgroundColor = getCSSVariable("--primary-color-disabled");

  titleInput.addEventListener("input", function () {
    const title = titleInput.value.trim();
    const { isValid, message } = validatePostTitle(title);

    isTitleValid = isValid;
    titleHelper.textContent = message;

    updateSubmitButtonState();
  });

  contentInput.addEventListener("input", function () {
    const content = contentInput.value.trim();
    const { isValid, message } = validatePostContent(content);

    isContentValid = isValid;
    contentHelper.textContent = message;

    updateSubmitButtonState();
  });

  // 게시글 제출 처리
  submitButton.addEventListener("click", async function () {
    try {
      const postData = {
        title: titleInput.value.trim(),
        content: contentInput.value.trim(),
      };

      await createPost(postData);

      // 게시글 목록 페이지로 이동
      window.location.href = "/";
    } catch (error) {
      alert("게시글 작성 중 오류가 발생했습니다. 다시 시도해주세요.");
    }
  });

  // 취소 버튼 처리
  cancelButton.addEventListener("click", function () {
    if (confirm("작성 중인 내용이 저장되지 않습니다. 정말 취소하시겠습니까?")) {
      window.location.href = "/";
    }
  });
}
