import loadCSS from "../utils/loadCSS.js";

class NavBar extends HTMLElement {
  connectedCallback() {
    // 커스텀 CSS 로드 (경로는 사용되는 곳 기준으로..)
    loadCSS("../components/navbar.css");

    // 간단하게 innerHTML 사용
    this.innerHTML = `
      <div class="navBar">Jessie's Community</div>
    `;
  }
}

// 커스텀 요소 등록
customElements.define("nav-bar", NavBar);
