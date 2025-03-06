// CSS 파일을 동적으로 로드하는 함수
export default function loadCSS(href) {
  // 이미 로드된 CSS인지 확인
  const existingLink = document.querySelector(`link[href="${href}"]`);
  if (existingLink) return;

  // 새 link 요소를 생성하여 CSS 로드
  const link = document.createElement("link");
  link.rel = "stylesheet";
  link.type = "text/css";
  link.href = href;
  document.head.appendChild(link);
}
